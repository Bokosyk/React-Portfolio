import React from "react";
import Footer from '../components/Footer';


function Portfolio() {
  return (
    <section>

      <h5>Portfolio</h5>

      {/* <!-- Portfolio image gallery on a CSS grid --> */}
      <article className="gallery">

        <figure className="gallery__item gallery__item--1">
          <img src="https://raw.githubusercontent.com/Bokosyk/React-Portfolio/main/public/images/Mood.png" className="gallery__img" alt="Ima 1" />
          <caption>

          </caption>
        </figure>

        <figure className="gallery__item gallery__item--2">
          <img src="https://raw.githubusercontent.com/Bokosyk/React-Portfolio/main/public/images/Planner.png" className="gallery__img" alt="Ima 2" />
          <caption>
            
          </caption>
        </figure>

        <figure className="gallery__item gallery__item--3">
          <img src="https://raw.githubusercontent.com/Bokosyk/React-Portfolio/main/public/images/PassGen.png" className="gallery__img" alt="Ima 3" />
          <caption>
            
          </caption>
        </figure>

        <figure className="gallery__item gallery__item--4">
          <img src="https://raw.githubusercontent.com/Bokosyk/Burger/main/public/assets/Images/Burger.png" className="gallery__img" alt="Ima 4" />
          <caption>
            
          </caption>
        </figure>

        {/* <div>
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
        </div> */}


      </article>

      <Footer />
    </section>)
}

export default Portfolio;
