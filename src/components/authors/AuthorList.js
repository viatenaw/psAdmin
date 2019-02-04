import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class AuthorList extends Component {
  render() {
    const createAuthorRow = author => {
      return (
        <tr key={author.id}>
          <td>
            <Link
              className="list-group-item-action"
              to={"/authors/".concat(author.id)}
              params={{ id: author.id }}
            >
              {author.id}
            </Link>
          </td>
          <td>
            {author.firstName} {author.lastName}{" "}
          </td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{this.props.authors.map(createAuthorRow, this)}</tbody>
        </table>
      </div>
    );
  }
}

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
};

export default AuthorList;
