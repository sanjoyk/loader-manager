import { combineReducers } from "redux";

import projectReducer from "./project-reducer";
import loaders from "./loader-reducers.js"


export default combineReducers({ projectReducer, loaders });;
