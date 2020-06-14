import api from "../../utils/api";

export const NEWS_FEED = "NEWS_FEED";
export const NEWS_FEED_SUCCESS = "NEWS_FEED_SUCCESS";
export const NEWS_FEED_FAILURE = "NEWS_FEED_FAILURE";

export const getMessages = () => async (dispatch, getState) => {
  try {
    console.log("We are going into the Actions.")
    dispatch({ type: NEWS_FEED });
    const payload = await api.newsFeed();
    console.log(payload)
    dispatch({ 
        type: NEWS_FEED_SUCCESS,
         payload });
  } catch (err) {
    dispatch({
      type: NEWS_FEED_FAILURE,
      payload: err.message,
    });
  }
};

