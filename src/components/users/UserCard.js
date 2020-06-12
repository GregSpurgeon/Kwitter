import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import {Card} from "react-bootstrap";
// import {getUser} from "../../redux/actions/";
import PropTypes from "prop-types";



export const UserCard = ({getUser,username,displayName, about, pictureLocation}) => {
    let params = useParams();

    const [state, setState] = useState({username, displayName, about});
    
    useEffect(() => {getUser(params.username)}, [getUser] );    
    // console.log(displayName)
    return(
    <Card style={{ width: '24rem' }}>
        <Card.Header>Profile</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>User Name: {params.username}</ListGroup.Item>
                <ListGroup.Item>Display Name: {displayName}</ListGroup.Item>
                <ListGroup.Item>About: {about} </ListGroup.Item>
            </ListGroup>
    </Card>
    );
}

UserCard.propTypes = {
    getUser: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.string,
    username: PropTypes.string,
    displayName: PropTypes.string,
    about: PropTypes.string,
    pictureLocation: PropTypes.string,
  };