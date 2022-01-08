import { makeStyles } from "@mui/styles";

const ContactStyles = makeStyles({
  Contact: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    color: "#1C1F2E",
    position: "absolute",
    top: 0,
    zIndex: -1,
  },
  wrapper: {
    width: "90%",
    margin: "8rem 0",
  },
  contact__text: {
    marginBottom: "2rem",
    "& p": {
      fontSize: "1.2rem",
    },
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    // padding: "2rem",
    "& textarea": {
      minHeight: "12rem",
      marginBottom: "1rem",
    },
  },
  formControl: {
    position: "relative",
    width: "100%",
  },

  input: {
    width: "100%",
    padding: "0.8rem",
    margin: "0.5rem 0",
    borderRadius: "0.5rem",
    border: "1px solid #9CB1BA",
    // fontSize: "1rem",
    "&::placeholder": {
      color: "#9CB1BA",
      textTransform: "uppercase",
    },
  },

  errors: {
    color: "red",
    position: "absolute",
    top: 12,
    right: 10,
  },
  emailError: {
    height: "70%",
    background: "rgba(0,0,0,0.1)",
    borderRadius: "0.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    "& $warning": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    "& $message": {
      fontWeight: "bold",
      fontSize: "1.5rem",
    },
    "& $retry": {
      fontWeight: "bold",
      color: "#2D92A4",
      cursor: "pointer",
    },
  },
  message: {},
  warning: {},
  retry: {},
  loading: {
    width: "100%",
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: "10rem",
  },
  socials: {
    marginTop: "3rem",
    "& p": {
      fontSize: "1.2rem",
      marginBottom: "1rem",
    },
    "& a:hover": {
      color: "#9CB1BA",
    },
  },

  //   MEDIA QUERIES
  //   MEDIA QUERIES
  "@media(min-width: 64rem)": {
    Contact: {
      alignItems: "center",
    },
    wrapper: {
      width: "80%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
    },
    form: {
      gridColumn: "2/3",
      gridRow: "1/3",
    },
    emailError: {
      height: "20rem",
      padding: "4rem 0",
      // backgroundColor: "red",
      gridColumn: "2/3",
      gridRow: "1/3",
    },
    // contact__text: {
    //   "& p": {
    //     fontSize: "1.5rem",
    //   },
    // },
    socials: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      "& p": {
        fontSize: "1.5rem",
      },
    },
  },
  "@media(min-width: 90rem)": {
    wrapper: {
      width: "70%",
    },
  },
});

export default ContactStyles;
