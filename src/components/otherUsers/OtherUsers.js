import React, { useEffect } from 'react';
import "./OtherUsers.css"

export const OtherUsers =({otherUsers,users})=>{
  
  // const results = users
  // console.log(users)
  
  useEffect(()=>{
    otherUsers()
    },[]);
    
  return(
    <React.Fragment>
      <div>
        <h3 id="title-users">Other Users</h3>
         {users.map((user,index)=>(
           <div id="users" key={index}> {user.username}</div>
         
         ))}
      </div>
    </React.Fragment>
  )
}