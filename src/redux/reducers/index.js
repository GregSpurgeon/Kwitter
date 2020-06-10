import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { otheruserReducer } from "../reducers/otherUsers";

export default combineReducers({ 
  auth: authReducer,
  Other: otheruserReducer
 });
