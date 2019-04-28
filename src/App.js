import React, { Component } from "react";
import Login from "./login";
import SignUpTwo from "./signuptwo";
import  ForgotPassword from "./ForgotPassword";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact component={Login} />
          <Route path="/login/" component={Login} />
          <Route path="/register/" component={SignUpTwo}/>
           <Route path="/reset/" component={ForgotPassword} /> 
           
          {/* <Link to="/login/">Login</Link> */}
        </div>
      </Router>
    );
  }
}

export default App;
