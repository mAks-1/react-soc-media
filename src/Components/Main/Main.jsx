import React from "react";
import './main.css';
import '../../style.css';
import NavBar from "./NavBar/NavBar";
import MyProfile from "./MyPage/MyProfile/MyProfile";
import Newsfeed from "./Newsfeed/Newsfeed";
import Friends from "./Friends/Friends";

const Main = (props) => {
    return (
        <main>
            {props.children}
            {/*<NavBar/>*/}
            {/*<MyProfile/>*/}
            {/*<Newsfeed/>*/}
            {/*<Friends/>*/}
        </main>
    )
}

export default Main;