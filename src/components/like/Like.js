import React,{useState} from 'react';
import "./Like.css"


export const LikeMessage =({likeMessage})=>{
const [state, setState]=useState({
  messageId:0
});

 const handleLike = (event) => {
  event.preventDefault();
  likeMessage(state);
  setState((prevState) => ({ ...prevState, messageId:"" }));
  console.log("i ran")
};



return(
  <React.Fragment>
   
  </React.Fragment>
)
}