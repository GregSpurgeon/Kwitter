import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { otheruserReducer } from "../reducers/otherUsers";
import {postMessageReducer } from "../reducers/post-messgae";
import {likeReducer} from "../reducers/like"

export default combineReducers({ 
  auth: authReducer,
  Other: otheruserReducer,
  postMsg:postMessageReducer,
  like:likeReducer
 });
