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
        <label htmlFor="email">
          Email
          <Field type="text" name="email" placeholder="Email" />
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
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
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
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    console.log('submitting')
    if (values.email === "abc@gmail.com") {
      setErrors({ email: "That email is already taken" });
    } else {
      axios
        .post("XXXXXXXX", values)
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
  }
})(Login);

export default FormikLoginForm;
