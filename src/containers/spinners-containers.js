import React from "react";
import {connect} from "react-redux";

import Loader from "../components/loader.js";

// Spinner Container
let SpinnersContainer = ({ loaders, containersConfig = [] }) => (
  <div className="spinner-container">
    {
        containersConfig.map((config, index) => (<Loader
          key={index}
          container={config.CONTAINER_NAME}
          LoaderType={config.LOADER_TYPE}
          loaderDetails={loaders[config.CONTAINER_NAME]}
        />))
      }
  </div>
    );
    
const stateToProps = state => ({
  loaders: state.loaders,
  containersConfig: state.projectReducer.containersConfig,
});

export default connect(stateToProps, null)(SpinnersContainer);;
