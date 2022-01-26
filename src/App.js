import React from 'react';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function App(props) {
  return (
    <Router>
    <div className="App">
      <ResponsiveAppBar /> 
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/works" component={Works} />
          <Route path="/contact" component={Contact} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
