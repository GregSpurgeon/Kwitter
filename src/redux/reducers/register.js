import {  REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE } from "../actions";

const INITIAL_STATE= {
    loading:false,
    username:"",
    password:"",
    displayName:"",
}

export const registerReducer =(state= INITIAL_STATE, action) =>{
  switch(action.type){
    case REGISTER:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case REGISTER_SUCCESS:
      const{username,displayName, password}= action.payload;
      return{
        ...INITIAL_STATE,
        loading:false,
        username,
        displayName,
        password,
      }
    case REGISTER_FAILURE:
      return{
        ...INITIAL_STATE,
        error:action.payload,
        loading:false,
      }
    default:
      return state
  }
}