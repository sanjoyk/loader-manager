import React from 'react';
import LoaderActions from "./loader-actions.js";

// create loader component
const Loader = ({ LoaderType, container, loaderDetails }) => {
  const getLoadingStatus = (loaderDetails) => {
    let isLoading = false;
    if (loaderDetails && loaderDetails.actions && loaderDetails.actions.length > 0) {
      isLoading = true;
    }
    return isLoading;
  };
  return (
    <div className="sweet-loading">
      <p>{container}</p>
      <LoaderType
        color={"#123abc"}
        loading={getLoadingStatus(loaderDetails)}
      />
      <LoaderActions loaderDetails={loaderDetails} />
    </div>);
};
export default Loader;
