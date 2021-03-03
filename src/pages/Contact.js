import React from "react";


function Contact() {
  return (<section className="container">

  {/* // <!-- Aligns the whole row to the left of the page --> */}
  <div className="row-align-left">

    <div className="col-md-4">
      <div className="card mt-2">
        <div className="card-body">

          <h5 className="card-title">Contact</h5>
          
          {/* // <!-- Name input --> */}
          <div className="row first container">
            <div className="input-row col-md-11 ">
              <label id="name-label">Name</label>
              <input id="name" className="form-control" type="text" placeholder="Enter your name" required/>
            </div>

            {/* // <!-- Email input --> */}
            <div className="input-row col-md-11">
              <label id="email-label">E-mail</label>
              </div>
              <input id="email" className="form-control" type="email" placeholder="Enter your Email" required/>
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
</section>
)
}

export default Contact;
