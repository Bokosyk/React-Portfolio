import React from "react";
import "./style.css";

function Gallery() {
    return (
        <main>
            <h2>PORTFOLIO</h2>

            {/* Portfolio Gallery Grid */}
            <div className="row">
                <div className="column">
                    <div className="content">
                        <img src="https://raw.githubusercontent.com/Bokosyk/React-Portfolio/main/public/images/Mood.png" alt="Mountains" />
                        <h3>Mood</h3>
                        <a href="https://github.com/Bokosyk/Mood"><button type="button" className="btn btn-outline-dark">Repository</button></a>
                        <a href="https://bokosyk.github.io/Mood/"><button type="button" className="btn btn-outline-dark">Website</button></a>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <img src="https://raw.githubusercontent.com/Bokosyk/React-Portfolio/main/public/images/Planner.png" alt="Lights" />
                        <h3>Work Day Scheduler</h3>
                        <a href="https://github.com/Bokosyk/PLANNER"><button type="button" className="btn btn-outline-dark">Repository</button></a>
                        <a href="https://bokosyk.github.io/PLANNER/"><button type="button" className="btn btn-outline-dark">Website</button></a>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <img src="https://raw.githubusercontent.com/Bokosyk/React-Portfolio/main/public/images/PassGen.png" alt="Nature" />
                        <h3>Password Generator</h3>
                        <a href="https://github.com/Bokosyk/Password-Generator"><button type="button" className="btn btn-outline-dark">Repository</button></a>
                        <a href="https://bokosyk.github.io/Password-Generator/"><button type="button" className="btn btn-outline-dark">Website</button></a>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <img src="https://raw.githubusercontent.com/Bokosyk/Burger/main/public/assets/Images/Burger.png" alt="Mountains" />
                        <h3>Eat-Da-Burger</h3>
                        <a href="https://github.com/Bokosyk/Burger"><button type="button" className="btn btn-outline-dark">Repository</button></a>
                        <a href="https://stormy-peak-63579.herokuapp.com/"><button type="button" className="btn btn-outline-dark">Website</button></a>
                    </div>
                </div>
            </div>
        </main >
    );
}

export default Gallery;