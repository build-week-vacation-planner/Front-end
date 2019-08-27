import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Vacation Planner</h1>
      <Link to="/menu">
        <button>Hamburger Button</button>
      </Link>
    </div>
  );
};

export default Header;
