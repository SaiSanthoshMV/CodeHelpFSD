import React from 'react'
import './UserCard.css'
// import mypic from '../assets/samp.jpg'
const UserCard = (props) => {
    return (
        <div className="user-container" style={props.style}>
            <p id='user-name'> {props.name} </p>
            <img id='user-img' src={props.image} alt="User" />
            <p id='user-description'> {props.desc} </p>
        </div>
    )
}

export default UserCard