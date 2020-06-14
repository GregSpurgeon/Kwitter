import {
  NEWS_FEED,
  NEWS_FEED_SUCCESS,
  NEWS_FEED_FAILURE,
} from "../actions/newsFeed";

const INTIAL_STATE = {
//     id: 0,
//   text: "",
//   username: "",
//   likes: [
//     {
//       id: 0,
//       username: "",
//       messageId: 0,
//     }
// ],
messages: [],
  error: "",
  loading: false,
};
export const newsFeedReducer=(state = INTIAL_STATE, action)=> {
    console.log("We are going into the reducer.")
  switch (action.type) {
    case NEWS_FEED:
      return {
        ...state,
        loading:true
      };
    case NEWS_FEED_SUCCESS:
        const messages = action.payload
        console.log(action.payload)
      return {
        ...state,
        messages,
        loading: false,
      };
    case NEWS_FEED_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading:false,
      };

    default:
      return state;
  }
}

