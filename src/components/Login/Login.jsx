
import React, { useState, useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
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
  //     .post("", { email, password })
  //     .then((result) => {
  //       console.log(result);
  //       if (result.data === "Success") {
  //         console.log("Login Success");
  //         alert("Login successful!");
  //         // navigate("/home");
  //       } else {
  //         alert("Incorrect password! Please try again.");
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
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container  full-height d-flex text-center align-items-center justify-content-center row">
      <div className="addUser col-md-6 col-lg-4 ">
        <h3 className="signup-header">
          <FontAwesomeIcon icon={faUser} className="icon" />
          Sign IN
        </h3>

        <hr />
        <form className="addUserForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
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
            {/* <label htmlFor="Password">Password:</label> */}
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter your Password"
              onChange={handleChange}
            />
            <p>{formErrors.password}</p>
            <button type="submit" className="btn ">
              SIGN IN
            </button>
          </div>
        </form>
        <div className="login">
          <p>Don't have Account? </p>
          <Link to="/" type="submit" className="btn ">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
