import React from "react";

// import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Pluses from "../pluses/Pluses";
import Styles_project from "./Styles_project";

function Project({ data }) {
  const classes = Styles_project();
  // const darkTheme = useSelector((state) => state.theme);
  return (
    <div className={classes.Project}>
      <div className={classes.image}>
        {/* <Link to={`/projects${data.path}`} className={classes.image}> */}
        <div className={classes.overlay}></div>
        <img
          src={process.env.PUBLIC_URL + `${data.images.thumbnail.desktop}`}
          alt=""
          className={classes.thumbnail}
        />
        {/* <div className={classes.stack}>
          {data.stack.map((lang) => (
            <span key={lang}> {lang},</span>
          ))}
        </div> */}
        {/* </Link> */}
      </div>
      <motion.div
        className={classes.text}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className={classes.name}>{data.name}</p>
        <div className={classes.links}>
          <a href={data.links.live} target={`${data.name} live`}>
            Live Site
          </a>
          <span>| {"  "}</span>
          <a href={data.links.code} target={`${data.name} code`}>
            Code
          </a>
        </div>
        <p className={classes.summary}>{data.summary}</p>
        <Pluses size="small" width="5" />
      </motion.div>
    </div>
  );
}

export default Project;
