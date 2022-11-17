import { makeStyles } from "@mui/styles";

const DirnStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    zIndex: "-1",
  },
  wrapper: {
    width: "90%",
    marginTop: "6rem",

    // backgroundColor: "red",
    "& section": {
      margin: "4rem 0",
    },
    "& h1": {
      fontSize: "2.5rem",
    },
    "& h2": {
      fontSize: "1.5rem",
      marginBottom: "2rem",
    },
    "& p": {
      lineHeight: "1.5rem",
    },
    "& img": {
      width: "100%",
    },
    "& ul": {
      listStyle: "none",
      "& li": {
        marginRight: "1rem",
        marginBottom: "1rem",
      },
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
  },
  about: {
    "& $heading": {
      display: "flex",
      flexDirection: "column",
      marginBottom: "2rem",

      "& $links": {
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
    },
    "& $stack": {
      margin: "1rem 0",
      "& p": {
        fontSize: "1.2rem",
        fontWeight: "bold",
      },
    },
  },
  heading: {},
  links: {},
  stack: {},

  goals: {
    "& p": {
      marginTop: "1rem",
      "& a": {
        color: "#FF8F39",
      },
    },
  },
  stackExplaned: {
    "& p": {
      marginTop: "1rem",
    },
  },
  lessons: {
    "& img": {
      marginTop: "2rem",
    },
  },
  //MEDIA QUERIES
  //MEDIA QUERIES
  "@media(min-width:48rem)": {
    wrapper: {
      "& h1": {
        fontSize: "3rem",
      },
      "& h2": {
        fontSize: "2.5rem",
      },
      "& h3": {
        fontSize: "2rem",
      },
      "& p": {
        fontSize: "1.25rem",
        lineHeight: "2rem",
      },
      "& ul": {
        fontSize: "1.3rem",
      },
    },
    stack: {},
  },
  "@media(min-width: 64rem)": {
    wrapper: {
      width: "80%",
      "& p": {
        maxWidth: "50rem",
      },
    },
    stack: {
      "& ul": {
        display: "flex",
      },
    },
    stackExplaned: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& img": {
        width: "48%",
      },
      "& div": {
        width: "50%",
      },
    },
    moreImages: {
      display: "flex",
      justifyContent: "space-between",
      "& img": {
        width: "48%",
      },
    },
  },
  "@media(min-width: 90rem)": {
    wrapper: {
      width: "70%",
    },
  },
});

export default DirnStyles;
