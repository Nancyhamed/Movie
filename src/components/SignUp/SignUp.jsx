import React, { useState, useEffect } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setFormErrors(validate(formValues));

  //   axios
  //     .post("", { name, email, password })
  //     .then((result) => {
  //       console.log(result);
  //       if (result.data === "Already registered") {
  //         alert("E-mail already registered! Please Login to proceed.");
  //         navigate("/login");
  //       } else {
  //         alert("Registered successfully! Please Login to proceed.");
  //         navigate("/login");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container  full-height d-flex text-center align-items-center justify-content-center row">
      <div className="addUser col-md-4 col-lg-4 ">
        <h3 className="signup-header">
          <FontAwesomeIcon icon={faUser} className="icon" />
          Sign UP
        </h3>
        <hr />
        <form className="addUserForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            {/* <label htmlFor="name">Name:</label> */}
            <input
              type="text"
              id="name"
              name="username"
              autoComplete="off"
              placeholder="Enter your name"
              onChange={handleChange}
            />
            <p>{formErrors.username}</p>

            {/* <label htmlFor="email">Email:</label> */}

            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your Email"
              onChange={handleChange}
            />
            <p>{formErrors.email}</p>

            {/* <label htmlFor="password">Password:</label> */}
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter Password"
              onChange={handleChange}
            />
            <p>{formErrors.password}</p>

            <button type="submit" className="btn ">
              Sign Up
            </button>
          </div>
        </form>
        <div className="login">
          <p>Already have an Account? </p>
          <Link to="/login" className="btn ">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
