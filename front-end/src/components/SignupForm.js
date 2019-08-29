import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const SignupForm = ({ values, errors, touched, handleSubmit, status }) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (status) {
      setUserList([...userList, status]);
    }
  }, [status]);

  return (
    <div>
      <h1>Sign Up Here</h1>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        <Field type="password" name="password" placeholder="Password" />

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

const FormikSignupForm = withFormik({
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
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { resetForm, setStatus, setErrors }) {
    if (values.username === "admin") {
      setErrors({ username: "That username is already taken" });
    } else {
      console.log(values);
      axios
        .post(
          "https://build-week-vacationplanner.herokuapp.com/createnewuser",
          values
        )
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.access_token);
          values.history.push("/login");
        })
        .catch(err => console.log(err.response));
    }
  }
})(SignupForm);

export default FormikSignupForm;
