import React,{ Component } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./Signup";
import test from "./test";
import play from "./play";


const App = () => {
  return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/test" component={test} />
          <Route exact path="/play" component={play} />
        </div>
      </Router>
  );
};

export default App;