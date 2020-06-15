import React from "react";
import { NewsFeedContainer } from "../components/newsFeed/index";
import {PostMessageContainer} from "../components"
import { MenuContainer } from "../components";
import "../screens/Message.css"

export const MessagesScreen = () => (
  <React.Fragment>
  <div id="message-screen"> 
    <MenuContainer />
    <PostMessageContainer/>
    <br/>
    <NewsFeedContainer />
    
</div>
  </React.Fragment>
);
