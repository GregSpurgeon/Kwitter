import api from "../../utils/api";

export const REGISTER = "REGISTER/LOGIN";
export const REGISTER_SUCCESS = "REGISTER/REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER/REGISTER_FAILURE";


export const register = (UserData) => async (dispatch, getState) => {
  try {
    dispatch({ type: REGISTER });
    const payload = await api.register(UserData);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: REGISTER_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: err.message,
    });
  }
};