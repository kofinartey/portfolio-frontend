import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Audiophile from './pages/audiophile/Audiophile';
import Contact from './pages/contact/Contact';
import Dirn from './pages/dirn/Dirn';
import Home from './pages/home/Home';
import ProductFeedback from './pages/product_feedback/ProductFeedback';
import Projects from './pages/projects/Projects';
import PortfolioStyles from './PortfolioStyles';

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
        <Route
          exact
          path="/projects/product_feedback"
          element={<ProductFeedback />}
        />
      </Routes>
    </Router>
  );
}

export default Portfolio;
