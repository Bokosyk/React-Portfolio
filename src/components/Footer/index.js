import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer>
      {/* Contact Information */}
      <a href="https://github.com/Bokosyk" className="fa fa-github" target="_blank" rel="noreferrer"> </a>
      <a href="https://www.linkedin.com/in/leandro-parrado-a05729166/" className="fa fa-linkedin" target="_blank" rel="noreferrer"> </a>
      <div className="box">
        <p><strong>Email:</strong> lparrado321@gmail.com</p>
        <p><strong>Phone Number</strong> (786) 374-9693</p>
      </div>

    </footer>
  );
}

export default Footer;
