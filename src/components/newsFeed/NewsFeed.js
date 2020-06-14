import React, { useEffect } from "react";
import PropType from "prop-types";
import Card from "react-bootstrap/Card";
import {Loader} from "../loader"
import { render } from "@testing-library/react";
import Button from 'react-bootstrap/Button'


export const NewsFeed = ({ getMessages, messages,loading }) => {
  useEffect(() => {
    // const fetchData = async () => {
    //   // console.log(results)
    // };
    // fetchData();
    getMessages();
  }
  ,[])
  
console.log(messages)
  // console.log(state)

  return (
    <React.Fragment>
{messages.map((message) => {
            return (
              <React.Fragment>
              <Card
               id="card"
               key={message.id}
                style={{width: '18rem'}}>
                <Card.Title
                 id="card-title">
                  {message.username}
                </Card.Title><br/>
                <Card.Body
                 id= "card-body">
             {message.text}  
                </Card.Body>
                <button
                 type="button"
                  id="like-button">
                    <i class="fa fa-thumbs-o-up"></i> Like
                    </button>
              </Card>
              <br/>
            </React.Fragment>
            );
            }
          )}

          {loading && <Loader></Loader>}
    </React.Fragment>
  );
};




                // {/* <div key={messages[0]}> */}
                // <p>From: {message.username}</p>
                // <p> created at: {message.createdAt}</p>
                // <p>{message.text}</p>
