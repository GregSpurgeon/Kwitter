import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
import {Link} from 'react-router-dom'

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>
    <LoginFormContainer />
    <h2>New to us?&nbsp;
      <Link to="/register">SignUp Here</Link>
    </h2>
  </>
);
