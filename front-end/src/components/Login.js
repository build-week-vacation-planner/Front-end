import React from "react";
import { Link } from "react-router-dom";
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
        <button type="submit">Submit</button>
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
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    axios
      .post("https://build-week-vacationplanner.herokuapp.com/login", `grant_type=password&username=${this.state.username}&password=${this.state.password}`, {
    
        headers: {
            
            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }))
      .then(res => {
        console.log(res);
        resetForm();
        setSubmitting(false);
        setStatus(res.data);
      })
      .catch(err => {
        console.log(err);
        setSubmitting(false);
      });
  }
})(Login);

export default FormikLoginForm;
