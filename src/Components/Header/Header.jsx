import React from "react";
import './header.css';
import '../../style.css';
import logo from '../../assets/soc-media-logo.png';

const Header = () => {
    return(
        <header>
            <div className="logo-wrapper">
                <img src={logo} alt=""/>
                <h1 className="logo">SomeName</h1>
            </div>
            <div className="header-nav">
                <input className="search" placeholder="Search" type="text"/>
                <input className="submit" type="submit"/>
                <a className="login" href="#">Login</a>
            </div>
        </header>
    )
}

export default Header;