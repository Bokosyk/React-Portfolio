import React from "react";
import Hero from "../components/Hero";
import "./style.css";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Pupster</h1>
        <h2>They're the Good Boys and Girls</h2>
      </Hero>
      <section className="container">
        {/* <!-- Aligns the whole row to the left of the page --> */}
        <div className="row-align-left">
          <div className="col-md-10">
            <div className="card mt-2">
              <div className="card-body">

                <h5 className="card-title">About Me</h5>

                {/* <!-- Testing image  insertion into card title --> */}
                <div className="col-md-4">
                  <img src="https://raw.githubusercontent.com/Bokosyk/React-Portfolio/main/public/images/File_000.jpeg" alt="Placeholder" className="img-thumbnail" />
                </div>
                <p className="card-text text-wrap"> Hey there! I'm Leandro. I was born in Kissimmee, Florida, spent a large
                chunk of my childhood in Las Vegas, Nevada, before moving back down to Florida and have been living here
                ever since! In 2017, I graduated from Hialeah Gardens H.S. in Hialeah, FL. After completing some courses
                in Graphic Design, I decided to change majors and tried a career in trades as an electrician. I did a lot
              of soul searching before my gut told me to finally go with web development.</p>

                <p className="card-text text-wrap">Now enrolled as a student in the University of Central Florida's Coding
                Bootcamp as of December 7, 2020,
                I'm finally pursuing something that is fulfilling and challenges me to grow. I've learned to work with
                HTML, CSS, Javascript, Bootstrap, Jquery, APIs, and much more. My goal is to one day become a full stack
              developer and start my own company. Thanks for visiting my web site.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
