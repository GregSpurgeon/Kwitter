import api from "../../utils/api";

// USER CONSTANTS
export const GETUSER = "USERS/GETUSER";
export const GETUSER_SUCCESS = "USERS/GETUSER_SUCCESS";
export const GETUSER_FAILURE = "USERS/GETUSER_FAILURE";
export const EDITUSER = "USERS/EDITUSER";
export const EDITUSER_SUCCESS = "USERS/EDITUSER_SUCCESS";
export const EDITUSER_FAILURE = "USERS/EDITUSER_FAILURE";
export const LOGOUT = "AUTH/LOGOUT";

/*
 USER ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
export const getUser = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: GETUSER });
    const payload = await api.getUser(credentials);
    
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: GETUSER_SUCCESS, payload });
    // console.log(getState().users.displayName)
  } catch (err) {
    dispatch({
      type: GETUSER_FAILURE,
      payload: err.message,
    });
  }
};

export const editUser = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: EDITUSER });
    const payload = await api.editUser(credentials);
    
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: EDITUSER_SUCCESS, payload });
    // console.log(getState().users.displayName)
  } catch (err) {
    dispatch({
      type: EDITUSER_FAILURE,
      payload: err.message,
    });
  }
};

export const logout = () => async (dispatch, getState) => {
  try {
    // We do not care about the result of logging out
    // as long as it succeeds
    await api.logout();
  } finally {
    /**
     * Let the reducer know that we are logged out
     */
    dispatch({ type: LOGOUT });
  }
};
