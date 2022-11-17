import React from "react";
import { useSelector } from "react-redux";
//my import
import filling_form from "../../assets/gifs/filling_form.gif";
import sign_in from "../../assets/gifs/sign_in.gif";
import sign_up from "../../assets/gifs/sign_up.gif";
import changingTheme from "../../assets/gifs/changing_theme.gif";
import dashboard from "../../assets/gifs/dashboard.gif";
import DirnStyles from "./DirnStyles";

function Dirn() {
  const classes = DirnStyles();
  const darkTheme = useSelector((state) => state.theme);
  const darkStyles = { backgroundColor: "#1C1F2E", color: "white" };
  return (
    <div className={classes.root} style={darkTheme ? darkStyles : {}}>
      <div className={classes.wrapper}>
        <section className={classes.about}>
          <div className={classes.heading}>
            <h1>Dirn Invoicing</h1>
            <div className={classes.links}>
              <a href="https://dirninvoicing.vercel.app/" target="sitePage">
                Live site
              </a>
              <a
                href="https://github.com/kofinartey/invoice-app"
                target="codePage"
              >
                Code
              </a>
            </div>
          </div>
          <p>
            Dirn Invoicing is an invoicing tool to help freelancers and other
            service based entrepreneurs to keep track of payments.
          </p>
          <div className={classes.stack}>
            <p>Stack</p>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Material UI</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <img src={filling_form} alt="" />
        </section>

        <section className={classes.goals}>
          <h2>Project Purpose and Goals</h2>
          <p>
            I learn more by building stuff based on concepts I have studied.
            Having gone through a few courses on React, I picked up this
            practice project from{" "}
            <a href="https://www.frontendmentor.io" target="frontend mentor">
              Frontend Mentor
            </a>{" "}
            with the aim of getting a good understanding of the React framework.
            And I managed to pull it off. And then came a few studies into the
            Fetch and making API calls. I did not so bad. However, in order to
            bring it all together, I needed to have a project of my own that
            sends some form of data from the frontend to a backend which I have
            control over. And this curiosity ended up in taking a entire Node Js
            course. The result of those weeks of study, turned out to be what I
            call Dirn Invoicing.
          </p>
          <p></p>
          <p>
            In short, the goal was to really understand how the frontend
            interacts with the backend.
          </p>
        </section>

        <section className={classes.stackExplaned}>
          <img src={changingTheme} alt="theme switching functionality" />
          <div>
            <h2>Web stack explained</h2>
            <p>
              {/* I love Vanilla Js, but when I got exposed to the fact that React
            allow you to separate the building blocks of your project into
            separate reuseable componets, I was blown away🤯. */}
              React was perfect for this project since there were several
              components (buttons, input, modals,etc) with similar styling that
              needed to be repeated across the website.
            </p>
            <p>
              Node Js with Express seems to be default these days for any
              javascript developer looking to dabble a into the server side of
              web development. It requires no other language but the one you're
              already familiar with.
            </p>
            <p>
              MongoDB was a good choice for my database. It is very flexible and
              fairly easy to get started with.
            </p>
          </div>
        </section>
        <section className={classes.moreImages}>
          <img src={sign_up} alt="sign up form" />
          <img src={sign_in} alt="sign in form" />
        </section>

        <section className={classes.lessons}>
          <h2>Problems and Lessons Learned</h2>
          <p>
            As with many dev projects, I had to battle and overcome a few
            challenges. Key among these were:
          </p>
          <ul>
            <li>
              {" "}
              figuring out how to provide an option to skip form validation when
              saving a draft.
            </li>
            <li>building a multilevel dropdown menu</li>
            <li>
              setting up a sever with various APIs for CRUD manipulations.
            </li>
            All these I did figure out eventually. Building this project was
            such a great learning experience.
          </ul>
          <img src={dashboard} alt="dashboard" />
        </section>
      </div>
    </div>
  );
}

export default Dirn;
