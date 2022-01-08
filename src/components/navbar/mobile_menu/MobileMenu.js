import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
//my imports
import { switchTheme } from "../../../redux/theme/themeReducer";
import Button from "../../button/Button";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

function MobileMenu({ open, setOpen }) {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme);
  const buttonText = darkTheme ? "light mode" : "dark mode";
  const toggler = darkTheme ? (
    <WbSunnyOutlinedIcon />
  ) : (
    <DarkModeOutlinedIcon />
  );
  const links = ["/projects", "/about", "/contact"];
  const handleClick = () => {
    setOpen(!open);
  };

  const classes = makeStyles({
    mobileMenu: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: darkTheme ? "#2f3543" : "#F0F1F5",
      color: darkTheme ? "white" : "#1C1F2E",
      position: "fixed",
      bottom: "0",

      top: 80,
      transition: "all 0.3s ease-in-out",

      "& a": {
        padding: "1.5rem 0",
        margin: "0.2rem 0",
        width: "100%",
        textAlign: "center",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: darkTheme ? "#272c36" : "rgba(0,0,0,0.1)",
        },
      },
      "& button": {
        position: "absolute",
        bottom: "3rem",
      },
    },
    "@media(min-width:64rem)": {
      mobileMenu: {
        display: "none",
      },
    },
  })();
  return (
    <motion.div
      className={classes.mobileMenu}
      initial={{ left: -1000 }}
      animate={{ left: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ left: -1000 }}
      onClick={handleClick}
    >
      {links.map((link) => (
        <Link
          to={`${link}`}
          key={`${link}`}
          onClick={handleClick}
        >{`${link}`}</Link>
      ))}
      {/* <Link to="/projects">/projects</Link>
      <Link to="/about">/about</Link>
      <Link to="/contact">/contact</Link> */}
      <Button leftIcon={toggler} onClick={() => dispatch(switchTheme())}>
        {buttonText}
      </Button>
    </motion.div>
  );
}

export default MobileMenu;
