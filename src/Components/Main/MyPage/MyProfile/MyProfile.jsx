import React from "react";
import './style/my-profile.css';
import '../../../../style.css';
import userPhoto from '../../../../assets/user-photo1.jpg';
import styles from './style/MyProfile.module.css';

const MyProfile = () => {
    return(
        <div className="user-page-wrapper">
            <div className={styles.bg}>
                <div className="about-user-block">
                    <img src={userPhoto} alt=""/>
                    <div className="info-about-user">
                        <div className="user-name-location">
                            <h3>Maks</h3>
                            <p>Lviv, Ukraine</p>
                        </div>
                        <div className="user-page-links">
                            <ul>
                                <li><a href="src/Components/Main/MyPage/MyProfile/MyPage#MyProfile.jsx">My profile</a></li>
                                <li><a href="src/Components/Main/MyPage/MyProfile/MyPage#MyProfile.jsx">Followers</a></li>
                                <li><a href="src/Components/Main/MyPage/MyProfile/MyPage#MyProfile.jsx">Photos</a></li>
                                <li><a href="src/Components/Main/MyPage/MyProfile/MyPage#MyProfile.jsx">Videos</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="create-post-block">
                <h1>My recent posts</h1>
                <textarea name="add-post" placeholder="Add some text to your post" cols="40" rows="2"></textarea>
                <button className="post-post">Post</button>
            </div>
        </div>
    )
}

export default MyProfile;