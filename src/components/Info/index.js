import React from "react";
import "./style.css";

function Info() {
  return (


     // PICTURE AND BIO
    <section>
      <div>
        <img src="https://raw.githubusercontent.com/Bokosyk/My-Portfolio/main/PICSmall.jpg" alt="Placeholder" className="img-thumbnail" />
      </div>

      <p className="text"> Hey there! I'm Leandro. I was born in Kissimmee, Florida and spent a large
        chunk of my childhood in Las Vegas, Nevada, before moving back down to Florida and have been living here
        ever since! In 2017, I graduated from Hialeah Gardens H.S. in Hialeah, FL. I started my journey learning graphic design and decided to dig deeper by learning more about how browsers worked, which eventually led me to web development.</p>

      <p className="text">Now graduated in the University of Central Florida's Coding
        Bootcamp, I'm finally pursuing something that is fulfilling and challenges me to grow. A self-motivated, continually learning Full Stack developer with a background in graphic design seeking to contribute to a meaningful open-source project. I enjoy building beautiful applications and figuring out how best to approach a task from a programming and artistic standpoint. I can visualize a product, build it from the ground-up, and make it stand out. I've learned to work with
        HTML, CSS, Javascript, Bootstrap, Jquery, APIs, and much more. Thanks for visiting my web site.</p>
    </section>
  );
}

export default Info;
