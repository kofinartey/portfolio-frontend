import React from "react";
import { makeStyles } from "@mui/styles";

function Button(props) {
  const styles = makeStyles({
    Button: {
      width: "100%",
      padding: " 0.8rem 1rem",
      margin: "0.3rem 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FF8F39",
      color: "white",
      textTransform: "uppercase",
      borderStyle: "none",
      cursor: "pointer",
      transition: "all ease-in-out 0.3s",
      "&:hover": {
        opacity: "0.8",
        // background: "none",
        // border: "1px solid #2D92A4 ",
      },
      "& p": {
        margin: "0 0 0 1rem",
      },
    },
  });
  const classes = styles();
  return (
    <button
      className={classes.Button}
      type={props.type}
      onClick={props.onClick}
    >
      {props.leftIcon}
      <p>{props.children}</p>
      {props.rightIcon}
    </button>
  );
}

export default Button;
