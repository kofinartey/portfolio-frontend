import { makeStyles } from "@mui/styles";

const ProjectsStyles = makeStyles({
  Projects: {
    width: "100%",
    minHeight: "100vh",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    top: 0,
    zIndex: -1,
  },
  wrapper: {
    width: "90%",
    margin: "8rem 0 4rem 0",
    "& h1": {
      marginBottom: "2rem",
    },
    position: "relative",
  },
  pluses: { display: "none" },

  //   MEDIA QUERIES
  //   MEDIA QUERIES
  "@media(min-width: 48rem)": {
    wrapper: {
      width: "90%",
    },
    projectList: {
      display: "flex",
      // justifyContent: "center",
      flexFlow: "row wrap",
    },
    pluses: {
      position: "absolute",
      right: 0,
      bottom: "4rem",
    },
  },
  "@media(min-width: 56rem)": {
    pluses: {
      display: "block",
      position: "fixed",
      right: "15%",
    },
  },
  "@media(min-width: 64rem)": {
    wrapper: {
      width: "80%",
      marginTop: "10rem",
    },
    projectList: {
      justifyContent: "space-between",
    },
  },

  "@media(min-width: 90rem)": {
    wrapper: {
      width: "70%",
    },
  },
});

export default ProjectsStyles;
