import React, { useEffect } from "react";
import PropType from "prop-types";
import Card from "react-bootstrap/Card";
import {Loader} from "../loader"
import Button from 'react-bootstrap/Button'
import "./NewsFeed.css"


export const NewsFeed = ({ getMessages,likeMessage, messages,loading }) => {
  useEffect(() => {
    // const fetchData = async () => {
    //   // console.log(results)
    // };
    // fetchData();
    getMessages();
  }
  ,[messages])

  const handleLike = (event,likemessage) => {
    console.log(likemessage)
    console.log(event.target.value)
    event.preventDefault();
    likeMessage({"messageId":parseInt(event.target.value)});
    console.log('I ran correctly ')
  };
  
  
// console.log(messages)
  // console.log(state)

  return (
    <React.Fragment>
      <h5 id="message-header">Message Feed</h5>
{messages.map((message) => {
 
            return (
              <React.Fragment>
            <div id="card-container">    
              <Card
               id="card"
               key={message.id}
                style={{width: '30%'}}>
                <Card.Title
                 id="card-title">
                  {message.username}
                </Card.Title><br/>
                <Card.Body
                 id= "card-body">
             {message.text}  
                </Card.Body>
                <Button 
                onClick={handleLike}
                 type="button"
                 size="sm"
                 value={message.id}
                  id="like-button">
                    <i class="fa fa-thumbs-o-up"></i> Like
                    </Button>
                    <span id="like-count">{message.likes.length}</span>
              </Card>
            </div>
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
