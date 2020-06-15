import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
// import {Link} from 'react-router-dom'
import "./Home.css"


export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h6>Your favorite microblogging platform</h6>
    <div id="loginContainer">
      <LoginFormContainer />
    </div>
    
  </>
);
