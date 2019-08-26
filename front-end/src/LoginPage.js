import React, {useState} from "react";
import ReactDOM from "react-dom";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";



const LoginPage = ({value}) => {

    return (
 <div className="login">
 <Form>
     <h1>Welcome</h1>
     <div className="email">
     <label htmlFor="email">Email</label>
  <input type="email" name="email" placeholder="email" />
  </div>
  <div className="password">
  <label htmlFor="password">Password</label>
  <input type="password" name="password" placeholder="password" />
  </div>
  <button className="loginButton">Login</button>
    </Form>    
    
 


 </div>
    )


}

export default LoginPage;