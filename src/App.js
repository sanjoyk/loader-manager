// loading js library components
import React, { Component } from "react";
import {  Provider } from "react-redux";

// loading css
import "./App.css";
import "../node_modules/react-select/dist/react-select.css";

//importing Constants
import { ACTIONS_NAMES} from "./constants";
//containers
import SpinnersContainer from "./containers/spinners-containers.js";
import ActionsList from "./containers/actions-list.js";

//components
import NewLoader from "./containers/new-loader.js";

import store from "./store.js";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
        <h1>Loader Manager</h1>
          <NewLoader/>
          <ActionsList actionNames={[ACTIONS_NAMES.ACTION1,ACTIONS_NAMES.ACTION2]}/>
          <SpinnersContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
