import React from "react";
// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

// Imports
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>Techystar</h1>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
