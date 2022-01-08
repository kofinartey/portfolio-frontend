import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Navbar from "./components/navbar/Navbar";
import Dirn from "./pages/dirn/Dirn";
import Audiophile from "./pages/audiophile/Audiophile";
import PortfolioStyles from "./PortfolioStyles";

function Portfolio() {
  const classes = PortfolioStyles();
  return (
    <Router>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects/dirn" element={<Dirn />} />
        <Route exact path="/projects/audiophile" element={<Audiophile />} />
      </Routes>
    </Router>
  );
}

export default Portfolio;
