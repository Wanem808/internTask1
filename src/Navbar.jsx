// Navbar.js

import React from "react";
import "./assets/CSS/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar d-flex justify-content-center">
      <ul className="nav-links">
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li>
         
            <Link to="/service" className="link">Our Service</Link>
          
        </li>
        <li>
        <Link to="/about" className="link">About Us</Link>
        </li>
        <li>
        <Link to="/contact" className="link">Contact</Link>

        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
