import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
//my imports
import Project from "../../components/project/Project";
import ProjectsStyles from "./ProjectsStyles";
import data from "../../projectsData.json";
import Pluses from "../../components/pluses/Pluses";

function Projects() {
  const classes = ProjectsStyles();
  const darkTheme = useSelector((state) => state.theme);
  return (
    <div
      className={classes.Projects}
      style={{
        backgroundColor: darkTheme && "#1C1F2E",
        color: darkTheme && "white",
      }}
    >
      <motion.div
        className={classes.wrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Projects</h1>
        <div className={classes.projectList}>
          {data.map((project) => (
            <Project data={project} key={project.id} />
          ))}
        </div>
        <div className={classes.pluses}>
          <Pluses orientation="vertical" animation={true} />
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
