import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
import "./LoginForm.css";
import {Link} from 'react-router-dom'

export const LoginForm = ({ login, loginGoogle,loading, error }) => {
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    login(state);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };
  const startAuthentication = () => {
    const authWindow = window.open(
      "https://kwitter-api.herokuapp.com/auth/google/login",
      "_blank",
      "width=500, height=500"
    );
    authWindow.window.opener.onmessage = (event) => {
      authWindow.close()
      if(!event || !event.data || !event.data.token) {
        // alert("Please log into your GOOGLE account")
        return
      }
      loginGoogle(event.data);
    }
  }

  return (
    <React.Fragment>
      <form id="login-form" onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          required
          onChange={handleChange}
        /><br/>
        <button type="submit" disabled={loading}>
          Login
        </button>
<br/>
<button onClick ={startAuthentication}>login using Google</button>
        <br/>
        <h6 id="registration-link">New to us?&nbsp;
          <Link to="/register">SignUp Here</Link>
        </h6>
      </form>

      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};

LoginForm.propTypes = {
  login: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
