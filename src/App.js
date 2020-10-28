import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
