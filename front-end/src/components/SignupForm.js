import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const SignupForm = ({ values, errors, touched, handleSubmit, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("infinite loop?");
    setUsers([...users, status]);
  }, [status]);

  return (
    <div>
      <h1>Sign Up Here</h1>
      <Form>
        <Field type="text" name="email" placeholder="Email" />
        <Field type="password" name="password" placeholder="Password" />

        <button type="submit">Submit</button>

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

const FormikSignupForm = withFormik({
  mapPropsToValues({ username, email, password, termsOfService }) {
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
    console.log("signing up");
    if (values.email === "abc@gmail.com") {
      setErrors({ email: "That email is already taken" });
    } else {
      axios
        .post("XXXXXXXXXXXX", values)
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
})(SignupForm);

export default FormikSignupForm;
