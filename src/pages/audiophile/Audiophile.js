import React from "react";
import { useSelector } from "react-redux";

//my import
import DirnStyles from "../dirn/DirnStyles";
import intro from "../../assets/gifs/audiophile/intro.gif";
import add_to_cart from "../../assets/gifs/audiophile/add_to_cart.gif";
import form from "../../assets/gifs/audiophile/form.gif";

function Audiophile() {
  //   const classes = AudiophileStyles();
  const classes = DirnStyles();
  const darkTheme = useSelector((state) => state.theme);
  const darkStyles = { backgroundColor: "#1C1F2E", color: "white" };
  return (
    <div className={classes.Dirn} style={darkTheme ? darkStyles : {}}>
      <div className={classes.wrapper}>
        <section className={classes.about}>
          <div className={classes.heading}>
            <h1>Audiophile eCommerce</h1>
            <div className={classes.links}>
              <a
                href="https://audiophile-ecommerce-zeta.vercel.app//"
                target="audiophile sitePage"
              >
                Live
              </a>
              <a
                href="https://github.com/kofinartey/audiophile-ecommerce"
                target="audiophile codePage"
              >
                Code
              </a>
            </div>
          </div>
          <p>
            Audiophile eCommerce is an eCommerce platform on which various high
            quality audio gear are sold with a particular interest in appealing
            to hardcore audio enthusiasts.
          </p>
          <div className={classes.stack}>
            <p>Stack</p>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Material UI</li>
            </ul>
          </div>
          <img src={intro} alt="" />
        </section>

        <section className={classes.goals}>
          <h2>Project Purpose and Goals</h2>
          <p>
            After taking a few courses in React and Redux, I needed to be put
            all the concepts I have learnt into practice. I picked up this
            project from{" "}
            <a href="https://www.frontendmentor.io" target="frontend mentor">
              Frontend Mentor
            </a>
            {". "}
            The focus of this project was to get a pretty good understanding of
            the React framework, state management in Redux and to be able to
            build something quite substantial with these tools.
          </p>
        </section>
        <img src={add_to_cart} alt="" />

        <section className={classes.lessons}>
          <h2>Problems and Lessons Learned</h2>
          <p>
            Biggest problem I encountered was figuring out how to increase count
            of an item that was already added to the cart when the "ADD TO CART"
            button is clicked without creating a new item in the cart with the
            same name. I know... easy peasy for you 😄.
          </p>
          <br />
          <p>
            Getting the styling as close as possible to the designed website was
            quite challenging as it required a very in depth attention to
            detais.
          </p>
          <br />
          <p>In the end I managed to get a decent understanding of</p>
          <ul>
            <li> the react framework's basics.</li>
            <li>state management in Redux.</li>
            <li>
              conditionally rendering page content based on URL parameters.
            </li>
          </ul>
          <img src={form} alt="" />
        </section>
      </div>
    </div>
  );
}

export default Audiophile;
