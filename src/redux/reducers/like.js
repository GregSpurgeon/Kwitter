import {  LIKE_MESSAGE, LIKE_MESSAGE_SUCCESS, LIKE_MESSAGE_FAILURE } from "../actions";

const INITIAL_STATE= {
    loading:false,
    messageId:"",
}

export const likeReducer =(state= INITIAL_STATE, action) =>{
  switch(action.type){
    case LIKE_MESSAGE:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case LIKE_MESSAGE_SUCCESS:
      const{messageId}= action.payload;
      // console.log(action.payload.users)
      return{
        ...INITIAL_STATE,
        loading:false,
        messageId
      }
    case LIKE_MESSAGE_FAILURE:
      return{
        ...INITIAL_STATE,
        error:action.payload,
        loading:false,
      }
    default:
      return state
  }
}