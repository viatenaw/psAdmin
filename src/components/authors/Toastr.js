import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

import { createStore, combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import React, { Component } from "react";

const reducers = {
  // ... other reducers ...
  toastr: toastrReducer // <- Mounted at toastr.
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);
class Toastr extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            <ReduxToastr
              timeOut={4000}
              newestOnTop={false}
              preventDuplicates
              position="top-right"
              transitionIn="fadeIn"
              transitionOut="fadeOut"
              progressBar
              closeOnToastrClick="true"
            />
          </div>
        </Provider>
      </div>
    );
  }
}

export default Toastr;
