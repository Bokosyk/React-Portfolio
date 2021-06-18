import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      
          <Route exact path="/" component={About} />
          <Route exact path="/React-Portfolio" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
