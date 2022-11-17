import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//my imports
import Pluses from "../../components/pluses/Pluses";
import Button from "../../components/button/Button";
import AboutStyles from "./AboutStyles";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { RESUME_URL } from "../../utils/utils";

function About() {
  const classes = AboutStyles();
  const darkTheme = useSelector((state) => state.theme);
  return (
    <div
      className={classes.About}
      style={{
        color: darkTheme && "white",
        backgroundColor: darkTheme && "#1C1F2E",
      }}
    >
      <motion.div
        className={classes.wrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className={classes.heading}>About</h2>
        <p className={classes.about__intro}>
          Hi, again. My name is <span>Eugene Nartey Ahulu.</span> I am a
          frontend developer with a keen interest in building beautiful yet
          functional web applications.
        </p>

        <div className={classes.skills}>
          <p>
            Since I begun my journey into software development, I have gained
            experience in:
          </p>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Testing (Jest, React Testing Library, Cypress)</li>
            <li>Version Control (Git, Github)</li>
            <li>Nodejs (Express, GraphQL)</li>
            <li>MongoDB</li>
            <li>UI/UX Design (Figma, Affinity Designer, Affinity Photo) </li>
          </ul>
        </div>

        <div className={classes.skills}>
          <p>
            I believe anything can be achieved through dedication and putting in
            the hours, and I'm curious about learning new things.
          </p>
          <br />

          <p>
            In a quest to advance my skillset, I'm currently learning{" "}
            <span>React Native</span> and <span>Electron.</span>
          </p>
        </div>

        <div className={classes.cta}>
          <p className={classes.cta__text}>
            I am available for job opportunities and new connections.
          </p>
          <p>Send me an email or have a look at my resume.</p>
          <div className={classes.cta__btns}>
            <Link to="/contact">
              <Button leftIcon={<EmailOutlinedIcon />}> Email</Button>
            </Link>
            <a href={RESUME_URL} target="resumePage  ">
              <Button leftIcon={<InsertDriveFileOutlinedIcon />}>
                {" "}
                Resume
              </Button>
            </a>
          </div>
        </div>
        <div className={classes.pluses}>
          <Pluses orientation="vertical" animation={false} />
        </div>
      </motion.div>
    </div>
  );
}

export default About;
