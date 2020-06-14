import React from "react";
import { MenuContainer } from "../components";
import { UserCardContainer } from "../components";


import {OtherUsersContainer} from "../components"


export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <h2>Profile</h2> 
    <UserCardContainer/>
    
    <OtherUsersContainer />
  
  </>
);
