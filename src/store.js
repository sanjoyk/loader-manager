import rootReducer from "./reducers";
import {createStore,applyMiddleware} from "redux";
import Logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(Logger));

export default store;
