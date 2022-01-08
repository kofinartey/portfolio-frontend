import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//my imports
import MobileMenu from "./mobile_menu/MobileMenu";
import { switchTheme } from "../../redux/theme/themeReducer";
import NavbarStyles from "./NavbarStyles";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

function Navbar() {
  const classes = NavbarStyles();
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const hamburger = open ? <CloseIcon /> : <MenuIcon />;
  const toggler = darkTheme ? (
    <WbSunnyOutlinedIcon />
  ) : (
    <DarkModeOutlinedIcon />
  );
  // const logoSrc = darkTheme ? logo_green : logo_black;
  const links = ["/projects", "/about", "/contact"];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  return (
    <nav
      className={classes.Navbar}
      style={{
        color: darkTheme && "white",
        position: open && "fixed",
      }}
    >
      <div className={classes.wrapper}>
        <Link to="/" className={classes.logo}>
          <img src={logo} alt="logo" />
          <p>Kofi Nartey</p>
        </Link>

        {open && <MobileMenu open={open} setOpen={setOpen} />}

        <div className={classes.desktopMenu}>
          {links.map((link) => (
            <Link
              to={`${link}`}
              style={
                link === location.pathname
                  ? {
                      borderBottom: "0.2rem solid #FF8F39",
                      color: "#FF8F39",
                      fontWeight: "bold",
                    }
                  : {}
              }
              key={link}
            >
              {link}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1xt0wRPGrdayPXCIfyfnjXmIEfnRo2Kkd/view?usp=sharing"
            target="resumePage"
          >
            /resume
          </a>
          <div
            className={`${classes.ham__togg} ${classes.toggler}`}
            onClick={() => dispatch(switchTheme())}
          >
            {toggler}
          </div>
        </div>

        <div
          className={`${classes.ham__togg} ${classes.hamburger}`}
          onClick={() => setOpen(!open)}
        >
          {hamburger}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
