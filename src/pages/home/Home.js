import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//my imports
import Pluses from "../../components/pluses/Pluses";
import HomeStyles from "./HomeStyles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Home() {
  const classes = HomeStyles();
  const darkTheme = useSelector((state) => state.theme);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // window.addEventListener("resize", () => {
  //   setWindowWidth(window.innerWidth);
  //   console.log(windowWidth);
  // });

  return (
    <div
      className={classes.Home}
      style={{
        backgroundColor: darkTheme && "#1C1F2E",
        color: darkTheme && "white",
      }}
    >
      <div className={classes.wrapper}>
        <div>
          <motion.p
            className={classes.hi}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            hi there,{" "}
            <span className={classes.name}>
              <Link to="/about">Kofi</Link>{" "}
              <span style={{ color: darkTheme && "white" }}>here.</span>
            </span>
          </motion.p>
          <motion.p
            className={classes.role}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Frontend Developer
          </motion.p>
        </div>

        <motion.div
          className={classes.socials}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 3 }}
        >
          <a href="https://github.com/kofinartey" target="githubWindow">
            {" "}
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/eugene-nartey-ahulu-b47b81120/"
            target="linkedinWindow"
          >
            {" "}
            <LinkedInIcon />
          </a>
        </motion.div>
        <div className={classes.pluses}>
          <Pluses orientation="vertical" />
        </div>
      </div>
    </div>
  );
}

export default Home;
