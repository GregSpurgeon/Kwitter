import React, { useEffect } from 'react';
import "./OtherUsers.css"

export const OtherUsers =({users})=>{
  
  // const results = users
  
  useEffect(()=>{
    const fetchData = async () => {
      // console.log(results)
      };
      fetchData()
  });

 
  return(
    <React.Fragment>
      <div>
        <h3 id="title-users">Other Users</h3>
         {users.map((users,index)=>(
           <div id="users" key={index}> {users.username}</div>
         
         ))}
      </div>
    </React.Fragment>
  )
}