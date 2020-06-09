import React, { useState } from 'react';
import ProptTypes from "prop-types";
import "./register.css"
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';



export const Register =({register})=>{
  const [state, setState] = useState({
    username: "",
    password: "",
    displayName:"",
  });

  const handleRegister = (event) => {
    event.preventDefault();
    register(state);
    alert('Thank You for Registering, please return to Home Page to Login')
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

    return (
      <React.Fragment>
        <h2 id="title">Welcome to Kwitter,</h2>
        <h5 id="title-sub">let's get startered</h5>
        <form id="register-form" onSubmit={handleRegister}>
            <label id="formElement" htmlFor="username">Username</label>
            <input 
              type="text"
              name="username"
              placeholder="Enter your username or email here"
              value={state.username}
              autoFocus
              required
              onChange={handleChange}
            />
            <label id="formElement" htmlFor="displayName">DisplayName</label>
            <input 
              type="text"
              name="displayName"
              placeholder="Name that will be displayed to others"
              value={state.displayName}
              autoFocus
              required
              onChange={handleChange}
            />
            <label id="formElement" htmlFor="password">Password</label>
            <input 
              type="password"
              name="password"
              placeholder="Must be between 3-10 Characters"
              value={state.password}
              required
              onChange={handleChange}
            />
            <br/>
            <Button
              variant="outline-primary" 
              size="sm"
              id='fromElement' 
              type="submit" 
            > 
              Register
            </Button>
           <div id="footer">
             <Link to="/">return Home Page</Link>
          </div> 
        </form>

       
      </React.Fragment>
    );

};

Register.propTypes = {
  register: ProptTypes.func.isRequired
};