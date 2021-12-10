import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar">
      <Link className="title" to="/">
        LEANDRO PARRADO
      </Link>
      
      <section>
        <ul className="container">

        <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Explore
            </Link>
            </li>

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
              to="/resume"
              className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
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
