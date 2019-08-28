import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = ({ errors, touched, handleSubmit, status }) => {
  return (
    <div>
      <h1>Log In to your Account</h1>
      <Form>
        <label htmlFor="username">
          Username
          <Field type="text" name="username" placeholder="Username" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" placeholder="Password" />
        </label>
        <button type="submit">Login</button>
        <div className="signUpButton">
          <Link to="/signup">
        <button type="submit">Sign Up</button>
        </Link>
        </div>
        <div>
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
        </div>
        <div>
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>
      </Form>
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password, history }) {
    return {
      username: username || "",
      password: password || "",
      history: history || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(5, "Password must be 5 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    console.log(values);
    axios
      .post(
        "https://build-week-vacationplanner.herokuapp.com/login",
        `grant_type=password&username=${values.username}&password=${values.password}`,
        {
          headers: {
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        console.log(res);
        resetForm();
        setSubmitting(false);
        setStatus(res.data);
        localStorage.setItem("token", res.data.access_token);
        values.history.push("/trip-list");
      })
      .catch(err => {
        console.log(err);
        setSubmitting(false);
      });
  }
})(Login);

export default FormikLoginForm;
