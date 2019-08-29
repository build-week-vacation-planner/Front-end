import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

const Login = ({ errors, touched, handleSubmit, status }) => {
  return (
    <StyledDiv>
      <StyledWrapper>
        <StyledWrap>
          <StyledHeader >Login</StyledHeader>
          <Form>

          <StyledGroup>
            <StyledLabel htmlFor="email">Email</StyledLabel>
              <StyledField type="text" name="email" placeholder="Email" />
          </StyledGroup>

          <StyledGroup>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <StyledField type="password" name="password" placeholder="Password" />
          </StyledGroup>
            
            <StyledButton type="submit">Sign in</StyledButton>
            <StyledP>Don't have an account? 
            <StyledA href="#">Sign Up</StyledA>
            </StyledP>
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
        </StyledWrap>
      </StyledWrapper>
    </StyledDiv>
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
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
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

`

const StyledWrapper = styled.div`
  display: inline-block;
  width: 600px;
`

export default FormikLoginForm;
