import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import styled from 'styled-components'
import { Link } from "react-router-dom";

const SignupForm = ({ values, errors, touched, handleSubmit, status }) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (status) {
      setUserList([...userList, status]);
    }
  }, [status]);

  return (
    <div>
      <StyledDiv>
      <StyledWrapper>
      <StyledHeader>Sign Up</StyledHeader>
      <Form>

        <StyledGroup>
          <StyledLabel>Username</StyledLabel>
          <StyledField type="text" name="username" placeholder="Username" />
        </StyledGroup>

        <StyledGroup>
        <StyledLabel>Password</StyledLabel>
        <StyledField type="password" name="password" placeholder="Password" />
        </StyledGroup>

        <StyledButton type="submit">Get started</StyledButton>
        <StyledP>Already have an account? 
          
          <Link to="/login">
          <StyledA href="#">Login Up</StyledA>
          </Link>
        </StyledP>
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
      </StyledWrapper>
      </StyledDiv>
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


// Styled components
const StyledField = styled(Field)`
    width: 600px;
    height: 48px;
    border-radius: 3px;
    border: 1px solid #EBEBEB;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 21px;
    padding-left: 12px;
    margin-bottom: 19px;

    :focus {
      border: 2px solid #008489;
      outline: none;
      padding-left: 11px;

    :placeholder {
      color: #484848;
    }
    }
`

const StyledGroup = styled.div`
  display: flex; 
  flex-direction: column;
`

const StyledLabel = styled.label`
  font-size: 12px;
  line-height: 16px;
  color: #484848;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-weight: 700;
`

const StyledButton = styled.button`
  background-color: #FE5B5E;
  color: white;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  border: none;
  padding: 12px 25px; 
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-family: 'Cereal';

  :hover {
  transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
  cursor: pointer;
  }
`

const StyledHeader = styled.h1`
  font-size: 24px 
  color: #484848;
  line-height: 30px; 
  margin-bottom: 30px;
  font-weight: 900;
`

const StyledWrap = styled.div`
  margin-top: 50px;
`

const StyledP = styled.p`
  color:  #58626D;
  margin-bottom: 20px;
`

const StyledA = styled.a`
  color: #008489;
  text-decoration: underline;
  margin-left: 5px;
  font-weight: 600;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

`

const StyledWrapper = styled.div`
  display: inline-block;
  width: 600px;
`

export default FormikSignupForm;
