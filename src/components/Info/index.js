import React from "react";
import "./style.css";

function Info() {
  return (


    // PICTURE AND BIO
    <section>
      <div>
        <img src="https://raw.githubusercontent.com/Bokosyk/My-Portfolio/main/PICSmall.jpg" alt="Placeholder" className="img-thumbnail" />
      </div>

      {/* BG graphics */}
      <picture>
        <figure className="fig1"></figure>
        <figure className="fig2"></figure>
        <figure className="fig3"></figure>
        <figure className="fig4"></figure>
        <figure className="fig5"></figure>
      </picture>

      <p className="text"> Hey there! I'm Leandro. I was born in Kissimmee, Florida and spent a large
        chunk of my childhood in Las Vegas, Nevada, before moving back down to Florida and have been living here
        ever since! In 2017, I graduated from Hialeah Gardens H.S. in Hialeah, FL. I started my journey learning graphic design and decided to dig deeper by learning more about how browsers worked, which eventually led me to web development.</p>

      <p className="text">Now graduated in the University of Central Florida's Coding
        Bootcamp, I'm finally pursuing something that is fulfilling and challenges me to grow. A self-motivated, continually learning Full Stack developer with a background in graphic design seeking to contribute to a meaningful open-source project. I enjoy building beautiful applications and figuring out how best to approach a task from a programming and artistic standpoint. I can visualize a product, build it from the ground-up, and make it stand out. I've learned to work with
        HTML, CSS, Javascript, Bootstrap, Jquery, APIs, and much more. Thanks for visiting my web site.</p>

      <aside className="touchbase">

        <h5 className="card-title">Get in Touch</h5>

        

          {/* // <!-- Email input --> */}
          <div className="input-row col-md-11">
            <label id="email-label">E-mail</label>
          </div>
          <input id="email" className="form-control" type="email" placeholder="Enter your Email" required />

          {/* // <!-- Name input --> */}
          <div className="input-row col-md-11 ">
            <label id="name-label">Name</label>
            <input id="name" className="form-control" type="text" placeholder="Enter your name" required />
          </div>
        
        <div className="input-row col-md-11">
          <label>Message</label>
          <textarea rows="" cols="84" className="form-control" name="description" placeholder="Enter your message here..."></textarea>
        </div>


        {/* // <!-- Portfolio images --> */}
        <div className="col-lg-3">
          <button type="button" className="btn btn-success">Submit</button>
        </div>

      </aside>
    </section>
  );
}

export default Info;
