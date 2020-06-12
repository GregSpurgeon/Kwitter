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
};



return(
  <React.Fragment>
    <button
      onClick={handleLike}
    > 
      thumbs-up
    </button>
    <div>{state.count}</div>
  </React.Fragment>
)
}