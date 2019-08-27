import React from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <form>
      <h1>Sign up form here</h1>
      <Link to="/trip-list">
        <button>Submit</button>
      </Link>
    </form>
  );
};

export default SignupForm;
