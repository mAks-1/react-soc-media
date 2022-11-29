import React from "react";
import MyProfile from "./MyProfile/MyProfile";
import Posts from "./Posts/Posts";
import styles from './my-page.module.css';

const MyPage = (props) => {
    return(
        <div className={styles.div}>
            <MyProfile/>
            <Posts posts={props.profilePage.posts} dispatch={props.dispatch}/>
        </div>
    )
}

export default MyPage;