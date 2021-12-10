import React from "react";
import Footer from '../components/Footer';


function Portfolio() {
  return (
    <section className="container">

      {/* <!-- Aligns the whole row to the left of the page --> */}
      <div className="row-align-left">

        <div className="col-md-8">
          <div className="card mt-2">
            <div className="card-body">

              <h5 className="card-title">Portfolio</h5>

              {/* <!-- Portfolio images --> */}
              <article className="col-lg-6">
                <div>
                  <p>Mood</p>
                  <img src="https://raw.githubusercontent.com/Bokosyk/React-Portfolio/main/public/images/Mood.png" alt="Mood Project" className="img-thumbnail" />
                  <a href="https://github.com/Bokosyk/Mood"><button type="button" className="btn btn-outline-dark">Repository</button></a>
                  <a href="https://bokosyk.github.io/Mood/"><button type="button" className="btn btn-outline-dark">Website</button></a>
                </div>
                <div>
                  <p>Workday Scheduler</p>
                  <img src="https://raw.githubusercontent.com/Bokosyk/React-Portfolio/main/public/images/Planner.png" alt="Workday Scheduler thumbnail" className="img-thumbnail" />
                  <a href="https://github.com/Bokosyk/PLANNER"><button type="button" className="btn btn-outline-dark">Repository</button></a>
                  <a href="https://bokosyk.github.io/PLANNER/"><button type="button" className="btn btn-outline-dark">Website</button></a>
                </div>
                <div>
                  <p>Password Generator</p>
                  <img src="https://raw.githubusercontent.com/Bokosyk/React-Portfolio/main/public/images/PassGen.png" alt="Password Generator thumbnail" className="img-thumbnail" />
                  <a href="https://github.com/Bokosyk/Password-Generator"><button type="button" className="btn btn-outline-dark">Repository</button></a>
                  <a href="https://bokosyk.github.io/Password-Generator/"><button type="button" className="btn btn-outline-dark">Website</button></a>
                </div>

                <div>
                  <p>Eat Da Burger</p>
                  <img src="https://raw.githubusercontent.com/Bokosyk/Burger/main/public/assets/Images/Burger.png" alt="Password Generator thumbnail" className="img-thumbnail" />
                  <a href="https://github.com/Bokosyk/Burger"><button type="button" className="btn btn-outline-dark">Repository</button></a>
                  <a href="https://stormy-peak-63579.herokuapp.com/"><button type="button" className="btn btn-outline-dark">Website</button></a>
                </div>


              </article>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>)
}

export default Portfolio;
