import React from "react";

import {Link as ScrollLink } from 'react-scroll';


// Imports
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <h1><ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500}> Techystar </ScrollLink> </h1>
        <div className="links">
          <ul>
          <li><ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500}> Home </ScrollLink> </li>
          <li><ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500}> About </ScrollLink> </li>
          <li><ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500}> Contact </ScrollLink> </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
