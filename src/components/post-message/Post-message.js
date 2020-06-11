import React, { useState } from 'react';
import ProptTypes from "prop-types";
import "./Post-message.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



export const PostMessage =({postMessageCall})=>{
  const [state, setState] = useState({
    text:""
  });

  const handlePost = (event) => {
    event.preventDefault();
    postMessageCall(state);
    // console.log('i ran')
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };
  
  return(
    <React.Fragment>
      
      <Card>
        {/* <Card.Title>{message.username}</Card.Title> */}
        <Card.Body> 
          <form onSubmit={handlePost}>
            <input 
              type="text"
              name="text"
              placeholder="type your message"
              value={state.text}
              autoFocus
              required
              onChange={handleChange} 
              />
            
            <Button
              variant="outline-primary" 
              size="sm"
              id='fromElement' 
              type="submit" 
            > 
              Post
            </Button>
          </form>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}