import React from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import "./style.css";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://wallpaperaccess.com/full/2674019.jpg">
        <h2> Full Stack Web Developer</h2>
      </Hero>
      <Info></Info>

    </div>
  );
}

export default About;
