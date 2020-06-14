import api from "../../utils/api";


export const RETRIEVE_OTHER_USERS = "RETRIEVE_OTHER_USERS/RETRIEVE_OTHER_USERS";
export const RETRIEVE_OTHER_USERS_SUCCESS = "RETRIEVE_OTHER_USERS/RETRIEVE_OTHER_USERS_SUCCESS";
export const RETRIEVE_OTHER_USERS_FAILURE = "RETRIEVE_OTHER_USERS/RETRIEVE_OTHER_USERS_FAILURE";


export const otherUsers = (OtherUserData) => async (dispatch, getState) => {
  try {
    dispatch({ type: RETRIEVE_OTHER_USERS });
    const payload = await api.otherUsers(OtherUserData);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ payload })
    dispatch({ type: RETRIEVE_OTHER_USERS_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: RETRIEVE_OTHER_USERS_FAILURE,
      payload: err.message,
    });
  }
};