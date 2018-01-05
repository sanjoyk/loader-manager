import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

// Main purpose of this Component is to call action creator and dispatching action
// In real life examples, purpose of this Component will be done from
// any ajax call or any lazy loading or any type of async execution
class Action extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.startAction = this.startAction.bind(this);
    this.stopAction = this.stopAction.bind(this);
  }
  startAction() {
    const { actionName,addAction } = this.props;
    addAction({
      actionName,
      loaders: this.state.value.split(","),
    });
  }
  stopAction() {
    const { actionName , removeAction} = this.props;
    removeAction(actionName);
  }

  handleChange = (value) => {
    this.setState({ value });
  }
  render() {
    const { actionName, loaderOptions } = this.props;
    return (
      <div className="action">
        <h2>{actionName}</h2>
        <Select
          name="form-field-name"
          multi
          simpleValue
          value={this.state.value}
          onChange={this.handleChange}
          options={loaderOptions}
        />
        <input type="button" className="button" value={`Start ${actionName}`} onClick={(this.startAction)} />
        <input type="button" className="button" value={`Stop ${actionName}`} onClick={this.stopAction} />
      </div>
    );
  }
}
Action.propTypes={
  actionName:PropTypes.string.isRequired, 
  removeAction:PropTypes.func.isRequired,
  addAction:PropTypes.func.isRequired
}
export default Action;
