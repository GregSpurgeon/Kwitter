// TODO: implement
import { GETUSER, GETUSER_SUCCESS, GETUSER_FAILURE, EDITUSER, EDITUSER_SUCCESS, EDITUSER_FAILURE, LOGOUT } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  username: "",
  displayName: "",
  about: "",
  loading: false,
  pictureLocation: "",
  error: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETUSER:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case GETUSER_SUCCESS:
      // console.log("insideReducer GetUserSuccess")
      // console.log(action.payload)
      return {
        ...INITIAL_STATE,
        username: action.payload.user.username,
        displayName: action.payload.user.displayName, 
        about: action.payload.user.about,
        pictureLocation: action.payload.user.pictureLocation,
        loading: false,
      
      };
    case GETUSER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
      case EDITUSER:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case EDITUSER_SUCCESS:
      console.log("insideReducer GetUserSuccess")
      console.log(action.payload)
      return {
        ...INITIAL_STATE,
        username: action.payload.user.username,
        displayName: action.payload.user.displayName, 
        about: action.payload.user.about,
        pictureLocation: action.payload.user.pictureLocation,
        loading: false,
      
      };
    case EDITUSER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};