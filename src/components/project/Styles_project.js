import { makeStyles } from "@mui/styles";

const Styles_project = makeStyles({
  Project: {
    width: "100%",
    // maxWidth: "30rem",
    margin: "1rem 0 5rem 0",
    // overflow: "hidden",
    // borderRadius: "0.5rem",
  },
  image: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    display: "flex",
    "& $overlay": {
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.2)",
      opacity: "0",
      zIndex: "1",
      position: "absolute",
      transition: "all 0.3s ease-in-out",
      // top: "0",
    },
    "& img": {
      height: "100%",
      transition: "all 0.3s ease-in-out",
    },
    "&:hover": {
      borderRadius: "0.5rem",

      "& img": {
        transform: "scale(1.1)",
      },
      "& $overlay": {
        opacity: "1",
      },
    },
  },
  overlay: {},

  name: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  thumbnail: {
    width: "100%",
    marginBottom: "1rem",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },
  summary: {
    // fontSize: "1.2rem",
    color: "#8c8c8c",
  },
  links: {
    marginBottom: "1rem",
    "& a": {
      color: "#FF8F39",
      marginRight: "0.5rem",
      fontWeight: "bold",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },

  "@media(min-width: 48rem)": {
    Project: {
      maxWidth: "40rem",
      display: "flex",
      marginBottom: "3rem",
    },
    image: {
      width: "50%",
    },
    text: {
      width: "50%",
      margin: "4rem 0 0 1rem ",
    },
    stack: {
      textAlign: "right",
      // color: "#FF8F39",
    },
  },
  "@media(min-width: 64rem)": {
    Project: {
      maxWidth: "45rem",
    },
  },
});

export default Styles_project;
