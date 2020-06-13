import api from "../../utils/api";


export const LIKE_MESSAGE = "LIKE_MESSAGE";
export const LIKE_MESSAGE_SUCCESS = "LIKE_MESSAGE/LIKE_MESSAGE_SUCCESS";
export const LIKE_MESSAGE_FAILURE = "LIKE_MESSAGE/LIKE_MESSAGE_FAILURE";


export const likeMessage = (likemessage) => async (dispatch, getState) => {
  try {
    dispatch({ type: LIKE_MESSAGE });
    const payload = await api.likeMessageAPI(likemessage);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    console.log({ payload })
    dispatch({ type: LIKE_MESSAGE_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: LIKE_MESSAGE_FAILURE,
      payload: err.message,
    });
  }
};