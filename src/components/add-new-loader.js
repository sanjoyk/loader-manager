import React from "react";
import PropTypes from "prop-types";

const AddNewLoader = ({ addNewLoader }) =>
            <input
              type="button"
              className="button"
              value="Add New Loader"
              onClick={addNewLoader}
            />;
AddNewLoader.propTypes={
  addNewLoader:PropTypes.func.isRequired
}
export default AddNewLoader;
