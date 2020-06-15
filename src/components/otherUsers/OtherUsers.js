import React, { useEffect } from 'react';
import "./OtherUsers.css"
import { Link } from "react-router-dom";

export const OtherUsers =({otherUsers,users})=>{
  
  // const results = users
  // console.log(users)
  
  useEffect(()=>{
    otherUsers()
    },[]);
    
  return(
    <React.Fragment>
      <div id="users-container">
        <h3 id="title-users">Other Users</h3>
         {users.map((user,index)=>(
           <span id="users" key={index}><Link to={`/profiles/${user.username}`}>{user.username}</Link></span>
         
         ))}
      </div>
    </React.Fragment>
  )
}