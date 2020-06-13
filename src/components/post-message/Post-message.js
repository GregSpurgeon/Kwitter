import React, { useState } from 'react';
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
    setState((prevState) => ({ ...prevState, text: '' }));
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
    
  };
  
  return(
    <React.Fragment>
      
      <Card id="card">
        <Card.Title id="card-title">Create a Message</Card.Title>
        <Card.Body id= "card-body"> 
          <form onSubmit={handlePost}>
            <textarea id="card-input"
              type="text"
              name="text"
              size="lg"
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