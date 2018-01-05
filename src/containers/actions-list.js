import React from "react";
import { connect } from "react-redux";

import { addAction, removeAction } from "../actions/loader-action.js";

import Action from "../components/action.js";

// crating list of action for demonostrations purpose
const ActionsList = ({actionNames, ...restProps}) => (
  <div className="action-list">
    {
      actionNames.map(actionName=><Action key={actionName} actionName={actionName} {...restProps} />)
    }
  </div>);

const stateToProps = state => ({
  loaderOptions: state.projectReducer.loaderOptions,
});

const dispatchToProps = ({
  addAction,
  removeAction,
});

export default connect(stateToProps, dispatchToProps)(ActionsList);
