import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar">
      <Link className="title" to="/">
        Leandro Parrado
      </Link>
      
      <section>
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
            </li>
            <li className="nav-item">
            <Link
              to="/public/resume.pdf"
              className={window.location.pathname === "/images/resume.pdf" ? "nav-link active" : "nav-link"}
            >
              Resume
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;
