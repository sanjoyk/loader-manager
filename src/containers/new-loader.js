import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addLoader, setNewLoaderStatus}  from "../actions/loader-action.js";
import {LOADER_CONTAINERS, SPINNERS} from "../constants";
import AddNewLoader from "../components/add-new-loader.js"

class NewLoader extends Component{
  constructor(props){
    super(props);
    this.addNewLoader = this.addNewLoader.bind(this);
  }
  addNewLoader() {
    const {setNewLoaderStatus, addLoader} = this.props;
    addLoader({
      loaderInfo: {
        CONTAINER_NAME: LOADER_CONTAINERS.CURRENT_ACTIVE_USERS,
        LOADER_TYPE: SPINNERS.CIRCLE_LOADER,
      },
    });
    setNewLoaderStatus(false);
  }
    render(){
      const {allowAddNewLoader } = this.props;
      if(!allowAddNewLoader){
        return <p>Note: Allowing to add only one loader 'dynamically', but we can add more </p> ;
      }
      return <AddNewLoader addNewLoader={this.addNewLoader} />
    }
}

NewLoader.propTypes={
  allowAddNewLoader:PropTypes.bool.isRequired,
  addLoader:PropTypes.func.isRequired,
  setNewLoaderStatus:PropTypes.func.isRequired,
}

const stateToProps = (state)=>({
  allowAddNewLoader:state.projectReducer.allowAddNewLoader
})

const dispatchToProps = {
  addLoader,
  setNewLoaderStatus
}

export default connect(stateToProps, dispatchToProps)(NewLoader);
