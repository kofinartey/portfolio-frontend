import { makeStyles } from "@mui/styles";

const HomeStyles = makeStyles({
  Home: {
    width: "100%",
    height: "100vh",
    position: "absolute",
    top: "0",
    zIndex: -1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#272C36",
  },
  wrapper: {
    width: "90%",
    // backgroundColor: "rgba(0,0,0,0.1)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    position: "relative",
  },
  hi: {
    fontFamily: "Lora",
    fontSize: "3rem",
  },
  name: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: "4rem",
    display: "block",
    color: "#FF8F39",
    "& span": {
      fontFamily: "Lora",
      fontSize: "3rem",
      fontWeight: "normal",
      color: "#272C36",
    },
  },
  role: {
    fontFamily: "Hind Madurai",
    fontSize: "1.5rem",
    marginTop: "1rem",
  },
  socials: {
    // fontSize: "4rem",
    width: "4rem",
    display: "flex",
    justifyContent: "space-between",
    justifySelf: "flex-end",
    alignSelf: "flex-start",
    position: "absolute",
    bottom: "2rem",
    "& a:hover": {
      transition: "all 0.2s ease-in-out",
      color: "#FF8F39",
    },
  },
  pluses: {
    position: "absolute",
    bottom: "2rem",
    right: "0",
  },

  // MEDIA QUERIES
  // MEDIA QUERIES
  "@media(min-width: 45rem)": {
    wrapper: {
      widht: "80%",
      textAlign: "center",
    },
    name: {
      display: "inline",
    },
  },

  "@media(min-width: 64rem)": {
    wrapper: {
      width: "70%",
    },
  },
});

export default HomeStyles;
