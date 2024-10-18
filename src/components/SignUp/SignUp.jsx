

import React, { useState, useEffect } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom"; // useNavigate instead of Navigate
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:4000/singUp", {
          email: formValues.email,
          password: formValues.password,
          username:formValues.username
        });

        console.log(response.data);
        if (response.data === "true") {
          
          console.log("navigate"); // Use navigate to redirect
        } else {
          alert(response.data); // Display error message from server
        }
      } catch (error) {
        console.error(error);
        alert("Error connecting to the server");
      }
    }
  };

  
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      navigate("/");
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
    <div className="sign_background">
      <div className="container mx-0 full-height d-flex text-center align-items-center justify-content-center row">
        <div className="addUser col-md-4 col-lg-4">
          <h3 className="signup-header">
            <FontAwesomeIcon icon={faUser} className="icon" />
            Sign UP
          </h3>
          <hr />
          <form className="addUserForm" onSubmit={handleSubmit}>
            <div className="inputGroup">
              <input
                type="text"
                id="name"
                name="username"
                autoComplete="off"
                placeholder="Enter your name"
                onChange={handleChange}
              />
              <p>{formErrors.username}</p>

              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                placeholder="Enter your Email"
                onChange={handleChange}
              />
              <p>{formErrors.email}</p>

              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                placeholder="Enter Password"
                onChange={handleChange}
              />
              <p>{formErrors.password}</p>

              <button type="submit" className="btn">
                Sign Up
              </button>
            </div>
          </form>
          <div className="login">
            <p className="text-light">Already have an Account? </p>
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
