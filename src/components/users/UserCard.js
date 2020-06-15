import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {Card} from "react-bootstrap";
import PropTypes from "prop-types";
import { putPicture } from "../../redux/actions";


export const UserCard = ({getUser,editUser,username, displayName, about, pictureLocation, putPicture}) => {
    
    let params = useParams();
    const [state, setState] = useState({username: "", displayName: "", about:""});
    const [picture, setPicture] = useState({file: null})
    
    const handlePhotoChange = (event) => {
      let getTargetFile = event.target.files
      setPicture(() => ({file: getTargetFile[0]}))  
    };

    const handlePutPicture = (event) => { //https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
      event.preventDefault();
      const data = new FormData();
      data.append("picture", picture.file)
      putPicture(data, username);
    }

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
      
      let url = "https://kwitter-api.herokuapp.com" + pictureLocation  
    useEffect(() => {getUser(params.username)}, [getUser] );    
    // console.log(displayName)
    return(
    <React.Fragment>
        <Card style={{ width: '24rem' }}>
            <Card.Header>PROFILE</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item><img src= {url}/></ListGroup.Item>
                    <ListGroup.Item>{displayName}</ListGroup.Item>
                    <ListGroup.Item>@{params.username}</ListGroup.Item>
                    <ListGroup.Item>About Me: {about} </ListGroup.Item>
            </ListGroup>   
        </Card>
        <form id="update-form" onSubmit={handleEditUser}>
            <label id="formElement" htmlFor="username">Username</label>
            <input 
              type="text"
              name="username"
              placeholder="Enter Your Username"
              value={state.username}
              autoFocus
              required
              onChange={handleChange}
            />
            <label id="formElement" htmlFor="displayName">DisplayName</label>
            <input 
              type="text"
              name="displayName"
              placeholder="Enter New Display Name"
              value={state.displayName}
              autoFocus
              required
              onChange={handleChange}
            />
            <label id="formElement" htmlFor="about">About</label>
            <input 
              type="text"
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
            </form>
            <form onSubmit= {handlePutPicture}>
              <input
              type="file"
              name="file"
              onChange={handlePhotoChange}
              />
              <button type="submit">
                Upload Picture
              </button>
              
            </form>
           <div id="footer">
          </div>

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