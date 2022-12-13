import React from "react";
import MyProfile from "./MyProfile/MyProfile";
import styles from './my-page.module.css';
import PostsContainer from "./Posts/PostsContainer";

const MyPage = (props) => {
    return(
        <div className={styles.div}>
            <MyProfile/>
            <PostsContainer/>
        </div>
    )
}

export default MyPage;