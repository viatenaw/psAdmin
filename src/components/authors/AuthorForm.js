import React, { Component } from "react";
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";

class AuthorForm extends Component {
  render() {
    return (
      <form>
        <h1>Manage Author</h1>
        <TextInput
          name="firstName"
          label="First Name"
          value={this.props.author.firstName}
          onChange={this.props.onChange}
          error={this.props.errors.firstName}
        />

        <br />
        <TextInput
          name="lastName"
          label="Last Name"
          value={this.props.author.lastName}
          onChange={this.props.onChange}
          error={this.props.errors.lastName}
        />

        <br />
        <input
          type="submit"
          value="Save"
          className="btn btn-outline-secondary "
          onClick={this.props.onSave}
        />
      </form>
    );
  }
}

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default AuthorForm;
