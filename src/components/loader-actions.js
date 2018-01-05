import React from "react";

// Associated Loaders for which Loader is showing
const LoaderActions = ({ loaderDetails = {} }) => {
  const { actions = [] } = loaderDetails;
  if(!(actions && actions.length>0)){
    return null;
  }
  return (
    <div className="associated-actions">
      Actions:{actions.map((actionName, index) =>
        <span key={index}>{`${actionName.replace("Action", "")},`}</span>) }
    </div>);
};
export default LoaderActions;
