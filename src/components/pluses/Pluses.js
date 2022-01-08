import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";

function Pluses({ orientation, animation, size, width, style }) {
  const classes = makeStyles({
    Pluses: {
      //   height: "10rem",
      //   width: "10rem",
      //   backgroundColor: "#FF4F2C",
      width: width && `${width}rem`,
      display: "flex",
      flexDirection: orientation === "vertical" ? "column" : "row",
      justifyContent: "space-between",
      alignItems: "space-between",
      "& span": {
        // color: "#FF4F2C",
        color: "#FF8F39",
        margin: 0,
        padding: 0,
        fontSize: size === "small" ? "1.5rem" : "2rem",
        fontWeight: "800",
      },
      ...style,
    },
  })();
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
        staggerChildren: 0.5,
        // repeat: Infinity,
      },
    },
  };
  const plusVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: animation ? [0, 1, 0] : 1,
      transition: {
        duration: 3,
        repeat: animation && Infinity,
      },
    },
    whileHover: {
      x: 10,
    },
  };
  return (
    <motion.div
      className={classes.Pluses}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.span variants={plusVariant}>+</motion.span>
      <motion.span variants={plusVariant}>+</motion.span>
      <motion.span variants={plusVariant}>+</motion.span>
      <motion.span variants={plusVariant}>+</motion.span>
    </motion.div>
  );
}

export default Pluses;
