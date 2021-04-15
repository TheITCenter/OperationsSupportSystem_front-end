import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './views/Home'
import Login from './views/Login'
import SignUp from './views/SignUp'

function ControlSystem() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default ControlSystem;
