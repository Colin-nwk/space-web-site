import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">
          <h1>GLX Space</h1>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/training">Training</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger">
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
