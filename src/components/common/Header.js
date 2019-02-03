import React, { Component } from "react";
import image from "./images/PSlogo.png";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ borderBottom: "1px solid #d9d9d9" }}
      >
        <Link to="/" className="navbar-brand">
          <img
            src={image}
            className="d-inline-block align-top"
            width="auto"
            height="50"
            alt="log"
          />
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="/author">Authors</NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
