import { makeStyles } from "@mui/styles";

const NavbarStyles = makeStyles({
  Navbar: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: "6rem",
    transition: "all 0.3s ease-in-out",
    zIndex: "2",
  },
  wrapper: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "black",
    "& img": {
      width: "2rem",
      height: "2rem",
      marginRight: "0.5rem",
    },
  },
  desktopMenu: {
    display: "none",
  },

  ham__togg: {
    width: "2rem",
    height: "2rem",
    border: "1px solid grey",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",

    "&:hover": {
      opacity: "0.5",
    },
  },
  hamburger: {},

  // MEDIA QUERIES
  // MEDIA QUERIES
  "@media(min-width: 64rem)": {
    Navbar: { height: "10rem" },
    wrapper: {
      width: "80%",
    },
    hamburger: {
      display: "none",
    },

    toggler: {
      marginLeft: "3rem",
    },
    desktopMenu: {
      display: "flex",
      alignItems: "center",
      "& a": {
        marginLeft: "2rem",
        padding: "0.6rem 0",
        // fontWeight: "bold",
        borderBottom: "0.2rem solid none",
        "&:hover": {
          // borderBottom: "0.2rem solid black",
          transition: "all 0.3s ease-in-out",
          color: "#FF8F39",
        },
      },
    },
  },

  "@media(min-width: 90rem)": {
    wrapper: {
      width: "70%",
    },
  },
});

export default NavbarStyles;
