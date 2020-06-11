import api from "../../utils/api";

export const POST_MESSAGE = "POST_MESSAGE/LOADING";
export const POST_MESSAGE_SUCCESS = "POST_MESSAGE/POST_MESSAGE_SUCCESS";
export const POST_MESSAGE_FAILURE = "POST_MESSAGE/POST_MESSAGE_FAILURE";


export const postMessageCall = (Data) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_MESSAGE  });
    const payload = await api.postMessageAPI(Data);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    console.log({ payload })
    dispatch({ type: POST_MESSAGE_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: POST_MESSAGE_FAILURE ,
      payload: err.message,
    });
  }
};