import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Splash from "./pages/Splash";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="aboutme" component={AboutMe} />
      </Switch>
    </Router>
  );
}

export default App;
