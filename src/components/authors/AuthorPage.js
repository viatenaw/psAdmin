import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthorList from "./AuthorList";
import Toastr from "./Toastr";
var AuthorApi = require("../../api/authorApi");

class AuthorPage extends Component {
  state = {
    authors: []
  };
  componentDidMount() {
    this.setState({ authors: AuthorApi.getAllAuthors() });
  }
  render() {
    return (
      <div>
        <h1>Author</h1>

        <Link to="/authors" className="btn btn-outline-secondary">
          Add Author
        </Link>
        <br />
        <br />
        <div>
          <AuthorList authors={this.state.authors} />
          <Toastr />
        </div>
      </div>
    );
  }
}

export default AuthorPage;
