import React from "react";
import "./style.css";

function Info() {
  return (


    // PICTURE AND BIO
    <section>
      <div class="hero">
        <img src="https://raw.githubusercontent.com/Bokosyk/My-Portfolio/main/PICSmall.jpg" alt="Leandro Parrado" className="img-thumbnail" />
      </div>

      {/* BG graphics */}
      <picture>
        <figure className="fig1"></figure>
        <figure className="fig2"></figure>
        <figure className="fig3"></figure>
        <figure className="fig4"></figure>
      </picture>

      <main className="text">
        <p> Hey there! I'm Leandro. I was born in Kissimmee, Florida and spent a large
          chunk of my childhood in Las Vegas, Nevada, before moving back down to Florida and have been living here
          ever since! In 2017, I graduated from Hialeah Gardens H.S. in Hialeah, FL. I started my journey learning graphic design and decided to dig deeper by learning more about how browsers worked, which eventually led me to web development.</p>

        <p>Now graduated in the University of Central Florida's Coding
          Bootcamp, I'm finally pursuing something that is fulfilling and challenges me to grow. A self-motivated, continually learning Full Stack developer with a background in graphic design seeking to contribute to a meaningful open-source project. I enjoy building beautiful applications and figuring out how best to approach a task from a programming and artistic standpoint. I can visualize a product, build it from the ground-up, and make it stand out. I've learned to work with
          HTML, CSS, Javascript, Bootstrap, Jquery, APIs, and much more. Thanks for visiting my web site.</p>
      </main>

      <form className="touchbase">

        <h5 className="card-title">Get in Touch</h5>

        <p>For business inquiries and collaborations please contact me below and leave a link to your website or portfolio. I am looking forward to hearing from you!</p>



        {/* // <!-- Email input --> */}
        <div>
          <label id="email-label">E-mail</label>
          <input id="email" className="form-control" type="email" placeholder="Enter your Email" required />
        </div>

        {/* // <!-- Name input --> */}
        <div>
          <label id="name-label">Name</label>
          <input id="name" className="form-control" type="text" placeholder="Enter your name" required />
        </div>

        <div className="submission">
          <label>Message</label>
          <textarea rows="" cols="84" className="form-control" name="description" placeholder="Enter your message here..."></textarea>
          <a href="/" target="_blank"><button type="button" className="btn btn-outline-dark">SUBMIT</button></a>
        </div>

      </form>
    </section>
  );
}

export default Info;
