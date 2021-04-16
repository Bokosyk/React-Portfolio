import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
      
      <div className="col-md-2">
                <img src="https://raw.githubusercontent.com/Bokosyk/React-Portfolio/main/public/images/File_000.jpeg" alt="Placeholder" className="img-thumbnail" />
              </div>

      <p className="text"> Hey there! I'm Leandro. I was born in Kissimmee, Florida and spent a large
        chunk of my childhood in Las Vegas, Nevada, before moving back down to Florida and have been living here
        ever since! In 2017, I graduated from Hialeah Gardens H.S. in Hialeah, FL. After completing some courses
        in Graphic Design, I decided to change majors and tried a career in trades as an electrician. I did a lot
      of soul searching before my gut told me to finally go with web development.</p>

        <p className="text">Now I'm finally pursuing something that is fulfilling and challenges me to grow. After graduating from the UCF Full-Stack Web Development bootcamp, I'm able to build beautiful full-stack applications and solve problems with code. I've learned to work with
        HTML, CSS, JavaScript, third-party APIs, Progressive Web Applications, MySQL, API design, and the MERN stack (MongoDB, Express.js, React.js, Node.js) and much more. Allow me to bring your vision to life!</p>
    </div>
  );
}

export default Hero;
