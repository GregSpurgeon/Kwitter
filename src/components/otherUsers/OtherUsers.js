import React, { useEffect } from 'react';
import ProptTypes from "prop-types";
import "./OtherUsers.css"

export const OtherUsers =({users})=>{
  
  const results = users
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
         {results.map((user,index)=>(
           <div id="users" key={index}> {user.username}</div>
         
         ))}
      </div>
    </React.Fragment>
  )
}