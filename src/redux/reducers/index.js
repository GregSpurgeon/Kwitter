import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { userReducer } from "./users";
import { otheruserReducer } from "../reducers/otherUsers";
import {postMessageReducer } from "../reducers/post-messgae";


export default combineReducers({ 
  auth: authReducer,
  Other: otheruserReducer,
  postMsg:postMessageReducer,
  users:userReducer
 });
