import React from "react";
import MyProfile from "./MyProfile/MyProfile";
import Posts from "./Posts/Posts";
import styles from './my-page.module.css';

const MyPage = () => {
    return(
        <div className={styles.div}>
            <MyProfile/>
            <Posts/>
        </div>
    )
}

export default MyPage;