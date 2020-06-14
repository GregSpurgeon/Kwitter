import { combineReducers } from "redux";
import { authReducer } from "./auth";
import {newsFeedReducer} from "./newsFeed"
export default combineReducers({ 
    auth: authReducer,
    newsFeed: newsFeedReducer, 
});
