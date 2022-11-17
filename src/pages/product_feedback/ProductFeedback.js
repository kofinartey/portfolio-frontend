import React from "react";
import DirnStyles from "../dirn/DirnStyles";

function ProductFeedback() {
  const classes = DirnStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <section className={classes.about}>
          <div className={classes.heading}>
            <h1>Product Feedback App</h1>
            <div className={classes.links}>
              <a
                href="https://dreamy-khapse-ee9096.netlify.app/"
                target="sitePage"
              >
                Live site
              </a>
              <span>| {"   "}</span>
              <a
                href="https://github.com/kofinartey/product-feedback-app"
                target="codePage"
              >
                Code
              </a>
            </div>
          </div>
          <p>
            An interactive product feedback application. Review a product,
            upvote, and let your opinion be heard.
          </p>
          <div className={classes.stack}>
            <h4>Stack</h4>
            <ul>
              <li>Typescript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Material UI</li>
            </ul>
          </div>
          {/* <img src={filling_form} alt="" /> */}
        </section>

        <section className={classes.goals}>
          Further explanation coming...
        </section>
      </div>
    </div>
  );
}

export default ProductFeedback;
