import React from "react";
import './Friend.css';
import bg1 from "../../../../assets/friend-bg1.jpg";
import photo1 from "../../../../assets/friend-photo1.jpg";
import bg2 from "../../../../assets/friend-bg2.jpg";
import photo6 from "../../../../assets/friend-photo6.jpg";
import bg3 from "../../../../assets/friend-bg3.jpg";
import photo5 from "../../../../assets/friend-photo5.jpg";
import bg4 from "../../../../assets/friend-bg4.jpg";
import photo4 from "../../../../assets/friend-photo4.jpg";
import bg5 from "../../../../assets/friend-bg5.jpg";
import photo2 from "../../../../assets/friend-photo2.jpg";
import bg6 from "../../../../assets/friend-bg6.jpg";
import photo3 from "../../../../assets/friend-photo3.jpg";

const Friend = (props) => {
    return (
        <div className="friend-block">
            <img className="friend-block-bg" src={props.bg} alt=""/>
            <img className="friend-block-photo" src={photo1} alt=""/>
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