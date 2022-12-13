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
            <div className="nav-link-wrapper">
                <NavLink className="navlink" to="/home-page"><img src={home} alt=""/></NavLink>
                <NavLink className="navlink" to="/newsfeed"><img src={burgerMenu} alt=""/></NavLink>
                <NavLink className="navlink" to="/friends"><img src={friends} alt=""/></NavLink>
                <NavLink className="navlink" to="/chats"><img src={chat} alt=""/></NavLink>
                <NavLink className="navlink" to="/photos"><img src={images} alt=""/></NavLink>
                <NavLink className="navlink" to="/videos"><img src={video} alt=""/></NavLink>
            </div>
        </div>
    )
}

export default NavBar;