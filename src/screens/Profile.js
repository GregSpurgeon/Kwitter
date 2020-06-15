import React from "react";
import { MenuContainer } from "../components";
import { UserCardContainer } from "../components";
import {OtherUsersContainer} from "../components"
import "../screens/Profile.css"

export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <h3 id="profile-header">Your Profile</h3> 
    <UserCardContainer/>
     <OtherUsersContainer />

  
  </>
);
