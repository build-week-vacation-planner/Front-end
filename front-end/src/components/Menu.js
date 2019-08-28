import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <h1>Menu List</h1>
      <Link to="/trip-list">
        <button>Home</button>
      </Link>
      <Link to="/login">
      <button>Account</button>
      </Link>
      <button>Settings</button>
      <Link to="/">
        <button>Log Out</button>
      </Link>
    </div>
  );
};

export default Menu;
