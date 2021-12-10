import React from "react";
import Info from "../components/Info";
import "./style.css";
import Footer from '../components/Footer';

function About() {
  return (
    <article>
      <Info>
        <h2> Full Stack Web Developer</h2>

      </Info>
      <div className="row-align-left">

        <div className="col-md-4">
          <div className="card mt-2">
            <div className="card-body">

              <h5 className="card-title">Contact</h5>

              {/* // <!-- Name input --> */}
              <div className="row first container">
                <div className="input-row col-md-11 ">
                  <label id="name-label">Name</label>
                  <input id="name" className="form-control" type="text" placeholder="Enter your name" required />
                </div>

                {/* // <!-- Email input --> */}
                <div className="input-row col-md-11">
                  <label id="email-label">E-mail</label>
                </div>
                <input id="email" className="form-control" type="email" placeholder="Enter your Email" required />
              </div>

              <div className="input-row col-md-11">
                <label>Messages</label>
                <textarea rows="" cols="84" className="form-control" name="description" placeholder="Enter your message here..."></textarea>
              </div>


              {/* // <!-- Portfolio images --> */}
              <div className="col-lg-3">
                <button type="button" className="btn btn-success">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </article>
    

  );
}

export default About;
