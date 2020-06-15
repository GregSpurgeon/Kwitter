import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {Card} from "react-bootstrap";
import PropTypes from "prop-types";
import "./UserCard.css"



export const UserCard = ({getUser,editUser,username,displayName, about, pictureLocation}) => {
    
    let params = useParams();
    const [state, setState] = useState({username: "", displayName: "", about:""});
    
    const handleEditUser = (event) => {
        event.preventDefault();
        editUser(state);
        // console.log(editUser())
        alert('Update Complete')
      };
    
      const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
      };

    useEffect(() => {getUser(params.username)}, [getUser] );    
    // console.log(displayName)
    return(
    <React.Fragment>
      <div id="profile">
        <Card style={{ width: '24rem' }}>
            <Card.Header id="output">PROFILE</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item id="output">{displayName}</ListGroup.Item>
                    <ListGroup.Item id="output">@{params.username}</ListGroup.Item>
                    <ListGroup.Item id="output">About Me: {about} </ListGroup.Item>
            </ListGroup>   
        </Card>
      </div>
        <form id="update-form" onSubmit={handleEditUser}>
            <label id="formElement" htmlFor="username">Username</label>
            <input 
              type="text"
              name="username"
              size="lg"
              placeholder="Enter Your Username"
              value={state.username}
              autoFocus
              required
              onChange={handleChange}
            /><br/>
            <label id="formElement" htmlFor="displayName">DisplayName</label>
            <input 
              type="text"
              size="lg"
              name="displayName"
              placeholder="Enter New Display Name"
              value={state.displayName}
              autoFocus
              required
              onChange={handleChange}
            /><br/>
            <label id="formElement" htmlFor="about">About</label>
            <input 
              type="text"
              size="lg"
              name="about"
              placeholder="All Ears"
              value={state.about}
              required
              onChange={handleChange}
            />
            <br/>
            <Button
              variant="outline-primary" 
              size="sm"
              id='fromElement' 
              type="submit" 
            > 
              Update Profile
            </Button>
           <div id="footer">
          </div> 
        </form>

    </React.Fragment> 
    );
}

UserCard.propTypes = {
    getUser: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.string,
    username: PropTypes.string,
    displayName: PropTypes.string,
    about: PropTypes.string,
    pictureLocation: PropTypes.string,
  };