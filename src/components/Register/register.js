import React, { useState } from 'react';
import ProptTypes from "prop-types";
import "./register.css"
import {Link} from 'react-router-dom'


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
        <form id="register-form" onSubmit={handleRegister}>
            <label id="formElement" htmlFor="username">Username</label>
            <input 
              type="text"
              name="username"
              value={state.username}
              autoFocus
              required
              onChange={handleChange}
            />
            <label id="formElement" htmlFor="displayName">DisplayName</label>
            <input 
              type="text"
              name="displayName"
              value={state.displayName}
              autoFocus
              required
              onChange={handleChange}
            />
            <label id="formElement" htmlFor="password">Password</label>
            <input 
              type="password"
              name="password"
              value={state.password}
              required
              onChange={handleChange}
            />
            <br/>
            <button 
              id='fromElement' 
              type="submit" 
            > 
              Register
            </button>

        </form>
        <Link to="/">return Home Page</Link>
      </React.Fragment>
    );

};

Register.propTypes = {
  register: ProptTypes.func.isRequired
};