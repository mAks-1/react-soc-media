import React from "react";
import './Friend.css';

// WITH LOCAL SERVER

const Friend = (props) => {
    return (
        <div className="friend-block">
            <img className="friend-block-bg" src={props.bg} alt=""/>
            <img className="friend-block-photo" src={props.avatar} alt=""/>
            <div>
                <h2>Followers: {props.followers}</h2>
                <a>{props.name}</a>
                <p>{props.location}</p>
            </div>
            <ul>
                <li><span>Friends {props.friends}</span></li>
                <li><span>Videos {props.videos}</span></li>
                <li><span>Photos {props.photos}</span></li>
                <li><span>Posts {props.posts}</span></li>
                <li><span>Since {props.accountRegistered}</span></li>
            </ul>
            <button>Message</button>
        </div>
    )
}

export default Friend;