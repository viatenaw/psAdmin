import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import HomePage from "./components/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import AuthorPage from "./components/authors/AuthorPage";
import ErrorPage from "./components/ErrorPage";
import { Switch } from "react-router-dom";
import ManageAuthorPage from "./components/authors/ManageAuthorPage";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Header />
          <br />
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/author" component={AuthorPage} />
              <Route
                name="addAuthor"
                path="/authors"
                component={ManageAuthorPage}
              />
              <Route
                path="/authors/:id"
                render={props => <ManageAuthorPage {...props} />}
              />

              <Route component={ErrorPage} />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default App;
