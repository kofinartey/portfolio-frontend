import { makeStyles } from "@mui/styles";

const AboutStyles = makeStyles({
  About: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    // color: "#7B7B7B",
    position: "absolute",
    top: 0,
    zIndex: -1,
  },
  wrapper: {
    margin: "12rem 0 6rem 0",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    fontSize: "1.5rem",
    fontWeight: "400",
    position: "relative",
  },
  heading: {
    marginBottom: "3rem",
  },
  about__intro: {
    "& span": {
      color: "#FF8F39",
      fontWeight: "bold",
    },
  },
  skills: {
    marginTop: "3rem",
    "& ul": {
      marginTop: "1rem",
      listStyle: "none",
      "& li::before": {
        content: "''",
        display: "inline-block",
        width: "0.5rem",
        height: "0.5rem",
        // border: "1px solid #2D92A4",
        backgroundColor: "#FF8F39",
        borderRadius: "50%",
        margin: "0 0.5rem 0.2rem 0 ",
      },
    },
    "& span": {
      color: "#FF8F39",
    },
  },

  cta: {
    marginTop: "4rem",
    "& $cta__text": {
      fontSize: "2rem",
      fontWeight: "bold",
      // color: "black",
      // color: "#FF8F39",
      // fontFamily: "Lora",
      marginBottom: "1rem",
    },
    "& button": {
      margin: "0.4rem 0",
    },
  },
  cta__text: {},
  pluses: {
    position: "fixed",
    bottom: "4rem",

    right: "0",
    display: "none",
  },

  //   MEDIA QUERIES
  //   MEDIA QUERIES
  "@media(min-width:48rem)": {
    wrapper: {
      paddingRight: "20%",
    },
    cta__btns: {
      width: "30rem",
      display: "flex",
      "& a": {
        width: "100%",
        marginRight: "1rem",
      },
    },
    pluses: {
      display: "block",
      right: "5%",
    },
  },

  "@media(min-width: 64rem)": {
    wrapper: {
      width: "80%",
      paddingRight: "30%",
    },
    pluses: {
      right: "10%",
    },
  },
  "@media(min-width: 90rem)": {
    wrapper: {
      width: "70%",
    },
    pluses: {
      right: "15%",
    },
  },
});

export default AboutStyles;
