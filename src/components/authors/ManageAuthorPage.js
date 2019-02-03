import React, { Component } from "react";
import AuthorForm from "./AuthorForm";
import { toastr } from "react-redux-toastr";
import { Prompt } from "react-router";

import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

import authorApi from "../../api/authorApi";
import Toastr from "./Toastr";

class ManageAuthorPage extends Component {
  state = {
    author: { id: "", firstName: "", lastName: "" },
    errors: {},
    dirty: false
  };

  componentWillMount() {
    var authorId = this.props.match.params.id; // from the path '/author:id'
    if (authorId) {
      this.setState({
        author: authorApi.getAuthorById(authorId)
      });
    }
  }
  setAuthorState = event => {
    this.setState({ dirty: true });
    let field = event.target.name;
    let value = event.target.value;
    this.state.author[field] = value;
    return this.setState({ author: this.state.author });
  };

  authorFormIsValid = () => {
    var formIsValid = true;
    this.state.errors = {}; // clear any previous errors
    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = "First Name must be atleast 3 characters";
      // this.setState(prevState => ({
      //   errors: {
      //     ...prevState.firstName,
      //     firstName: "First Name must be atleast 3 characters"
      //   }
      // }));

      formIsValid = false;
    }
    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = "Last Name must be atleast 3 characters";
      // this.setState(prevState => ({
      //   errors: {
      //     ...prevState.lastName,
      //     lastName: "Last Name must be atleast 3 characters"
      //   }
      // }));
      formIsValid = false;
    }
    this.setState({ errors: this.state.errors });
    return formIsValid;
  };

  saveAuthor = event => {
    event.preventDefault();
    if (!this.authorFormIsValid()) {
      return;
    }

    authorApi.saveAuthor(this.state.author);
    this.setState({ dirty: false });
    toastr.success("Author saved");
    this.props.history.push("/author");
  };
  render() {
    return (
      <div>
        <React.Fragment>
          <Prompt
            when={this.state.dirty}
            message="You have unsaved changes, are you sure you want to leave?"
          />
          {/* Component JSX */}
        </React.Fragment>
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor}
          errors={this.state.errors}
        />
        <Toastr />
        {/* You need to add this Toastr element in the component(AuthorPage) where you want to show 
        the toastr message and here as well   */}
      </div>
    );
  }
}

export default ManageAuthorPage;
