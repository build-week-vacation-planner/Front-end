import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import NavTab from "./NavTab";


const SignUp = ({errors, touched, values, status}) => {

    const [signup, setSignup] = useState([]);

    useEffect(() => {
        if (status) {
            setSignup([...signup, status]);
        }
    }, [status]);

  return (
      <div className="signup">
          <Form>
              <div className="signupForm">
              <label htmlFor="firstname">First Name</label>
              <input name="firstname" type="text" placeholder="first name" />
              {touched.firstname && errors.firstname && (
                  <p className="error">{errors.firstname}</p>
              )}
              <label htmlFor="firstname">Last Name</label>
              <input name="lastname" type="text" placeholder="last name" />
              {touched.lastname && errors.lastname && (
                  <p className="error">{errors.lastname}</p>
              )}
              <label htmlFor="email">email</label>
              <input name="email" type="email" placeholder="email" />
              {touched.email && errors.email && (
                  <p className="error">{errors.email}</p>
              )}
              <label htmlFor="password">password</label>
              <input name="password" type="password" placeholder="password" />
              {touched.password && errors.password && (
                  <p className="error">{errors.password}</p>
              )}
              <label htmlFor="confirmPassword">Confirm password</label>
              <input name="confirmPassword" type="password" placeholder="Confirm Password" />
              {touched.confirmpassword && errors.confirmpassword && (
                  <p className="error">{errors.confirmpassword}</p>
              )}
                <button type="submit">SignUp</button>
              </div>
          </Form>

          {}
      </div>
  )

};

const FormikSignUp = withFormik({
    mapPropsToValues({firstname, lastname, email, password, confirmpassword}){
        return {
            firstname: firstname || "",
            lastname: lastname || "",
            email: email || "",
            password: password || "",
            confirmpassword: confirmpassword || ""
        };
    },
    validationSchema: Yup.object().shape({
        firstname: Yup.string().required("please type first name here"),
        lastname: Yup.string().required("please type last name here"),
        email: Yup.string().required("we need a valid email"),
        password: Yup.string().required().min(6, 'password has to be longer than 6'),
        confirmpassword: Yup.string().required().min(6, 'password has to be longer than 6')
    }),
    handleSubmit(values, { setStatus}) {
        axios
        .post("https://reqres.in/api/users/", values)
        .then(res => {
            setStatus(res.data);
        })
        .catch(err => console.log(err.response));
    }
})(SignUp);

export default FormikSignUp;
