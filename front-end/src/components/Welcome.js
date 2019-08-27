import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h2>Please login or sign up below</h2>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default Welcome;
