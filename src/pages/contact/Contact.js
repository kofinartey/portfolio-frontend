import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//my imports
import ContactStyles from "./ContactStyles";
import Button from "../../components/button/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CircularProgress from "@mui/material/CircularProgress";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";

const darkStyles = {
  // borderColor: "#FF8F39",
  backgroundColor: "#1C1F2E",
  color: "white",
};

const schema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
  message: yup.string().required("Required"),
});

function Contact() {
  const classes = ContactStyles();
  const darkTheme = useSelector((state) => state.theme);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [emailStatus, setEmailStatus] = useState({
    loading: false,
    error: false,
    success: false,
  });

  const sendEmail = (message) => {
    setEmailStatus({ ...emailStatus, loading: true });
    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((res) => {
        if (!res.ok) {
          setEmailStatus({ ...emailStatus, error: true });
        } else {
          setEmailStatus({ ...emailStatus, loading: false, success: true });
          setTimeout(() => {
            setEmailStatus({ loading: false, error: false, success: false });
          }, 2000);
        }
        reset();
      })
      .catch((error) => {
        console.log(error);
        setEmailStatus({ ...emailStatus, error: true });
      });
  };
  const retry = () => {
    reset();
    setEmailStatus({ loading: false, error: false });
  };

  const submitEmail = (data) => {
    sendEmail(data);
  };

  //MAIN PAGE RETURN
  return (
    <div
      className={classes.Contact}
      style={{
        backgroundColor: darkTheme && "#1C1F2E",
        color: darkTheme && "white",
      }}
    >
      <motion.div
        className={classes.wrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={classes.contact__text}>
          <h1>Get in touch</h1>
          <p>Got any questions for me? Shoot me an email.</p>
          {/* <p>Shoot me an email. </p> */}
        </div>

        {/* conditionally render FORM, ERROR MESSAGE or SUCCESS MESSAGE */}
        {emailStatus.error ? (
          <div className={classes.emailError}>
            <div className={classes.warning}>
              <WarningRoundedIcon
                style={{ color: "orange", fontSize: "4rem" }}
              />
              <p className={classes.message}>Oops! Something went wrong</p>
              <p>
                Please{" "}
                <span className={classes.retry} onClick={retry}>
                  Retry
                </span>{" "}
                or use{" "}
                <a
                  href="mailto:eugeneahulu15@live.com"
                  className={classes.retry}
                  onClick={retry}
                >
                  Alternative Means
                </a>
              </p>
            </div>
          </div>
        ) : emailStatus.success ? (
          <div className={classes.emailError}>
            <CheckBoxRoundedIcon style={{ color: "green", fontSize: "3rem" }} />
            <p style={{ fontSize: "2rem" }}>Email sent</p>
          </div>
        ) : (
          <form className={classes.form} onSubmit={handleSubmit(submitEmail)}>
            <div className={classes.formControl}>
              <input
                type="text"
                className={classes.input}
                placeholder="Name"
                {...register("name", { required: true })}
                style={darkTheme ? darkStyles : {}}
              />
              <p className={classes.errors}>{errors.name?.message}</p>
            </div>
            <div className={classes.formControl}>
              <input
                type="text"
                className={classes.input}
                placeholder="Subject"
                {...register("subject")}
                style={darkTheme ? darkStyles : {}}
              />
              <p className={classes.errors}>{errors.subject?.message}</p>
            </div>
            <div className={classes.formControl}>
              <input
                type="email"
                className={classes.input}
                placeholder="Email"
                {...register("email", { required: true })}
                style={darkTheme ? darkStyles : {}}
              />
              <p className={classes.errors}>{errors.email?.message}</p>
            </div>
            <div className={classes.formControl}>
              <textarea
                className={classes.input}
                placeholder="Leave a Message"
                style={darkTheme ? darkStyles : {}}
                {...register("message", { required: true })}
              />
              <p className={classes.errors}>{errors.message?.message}</p>
            </div>

            <Button leftIcon={<SendRoundedIcon />}>Send</Button>
            <div className={classes.loading}>
              {emailStatus.loading && (
                <CircularProgress style={{ color: "#9CB1BA" }} />
              )}
            </div>
          </form>
        )}

        <div className={classes.socials}>
          <p>Find me on my socials:</p>
          <div>
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
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
