import {  RETRIEVE_OTHER_USERS, RETRIEVE_OTHER_USERS_SUCCESS, RETRIEVE_OTHER_USERS_FAILURE } from "../actions";

const INITIAL_STATE= {
    loading:false,
    users:[],
}

export const otheruserReducer =(state= INITIAL_STATE, action) =>{
  switch(action.type){
    case RETRIEVE_OTHER_USERS:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case RETRIEVE_OTHER_USERS_SUCCESS:
      const{users}= action.payload;
      console.log(action.payload.users)
      return{
        ...INITIAL_STATE,
        loading:false,
        users
      }
    case RETRIEVE_OTHER_USERS_FAILURE:
      return{
        ...INITIAL_STATE,
        error:action.payload,
        loading:false,
      }
    default:
      return state
  }
}