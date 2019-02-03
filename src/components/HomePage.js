import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>
          React, React Router, and Flux for ultra-responsive web applications{" "}
        </p>
        <Link className="btn btn-primary " to="/about">
          Learn more
        </Link>
      </div>
    );
  }
}

export default HomePage;
