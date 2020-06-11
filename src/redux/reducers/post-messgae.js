import {  POST_MESSAGE, POST_MESSAGE_SUCCESS, POST_MESSAGE_FAILURE } from "../actions";

const INITIAL_STATE= {
    loading:false,
    text:""
}

export const postMessageReducer =(state= INITIAL_STATE, action) =>{
  switch(action.type){
    case POST_MESSAGE:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case POST_MESSAGE_SUCCESS:
      const{text}= action.payload;
      // console.log(action.payload.message)
      return{
        ...INITIAL_STATE,
        loading:false,
          text
      }
    case POST_MESSAGE_FAILURE:
      return{
        ...INITIAL_STATE,
        error:action.payload,
        loading:false,
      }
    default:
      return state
  }
}