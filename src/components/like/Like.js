import React,{useState} from 'react';
import "./Like.css"


export const LikeMessage =({likeMessage})=>{
const [state, setState]=useState({
  messageId:0,
  count:0
});

const handleLike = (event) => {
  event.preventDefault();
  likeMessage(state);
  setState((prevState) => ({ ...prevState,
     messageId:"", 
    count:state.count +1}));
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