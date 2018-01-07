import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Home from "./screens/Home";

const Root = () => (
  <Router>
    <Route exact path="/" component={Home}/>
  </Router>
);

export default Root;
