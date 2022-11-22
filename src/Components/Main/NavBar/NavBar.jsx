import React from "react";
import './navbar.css';
import '../../../style.css';
import home from '../../../assets/home.png';
import burgerMenu from '../../../assets/burger-bar.png';
import friends from '../../../assets/group.png';
import chat from '../../../assets/messenger.png';
import images from '../../../assets/photo.png';
import video from '../../../assets/film.png';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar-wrapper">
            <ul>
                <li><NavLink to="/home-page"><img src={home} alt=""/></NavLink></li>
                <li><NavLink to="/newsfeed"><img src={burgerMenu} alt=""/></NavLink></li>
                <li><NavLink to="/friends"><img src={friends} alt=""/></NavLink></li>
                <li><NavLink to="/chats"><img src={chat} alt=""/></NavLink></li>
                <li><NavLink to="/photos"><img src={images} alt=""/></NavLink></li>
                <li><NavLink to="/videos"><img src={video} alt=""/></NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;