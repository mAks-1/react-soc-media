import React from "react";
import styles from '../../MyPage/Posts/Post/post.module.css';
import avatar from "../../../../assets/user-photo1.jpg";
import like from "../../../../assets/like.png";
import dislike from "../../../../assets/dislike.png";

const NewsFeedPost = (props) => {
    return(
        <div className={styles.post}>
            <div className={styles.photoName}>
                <img className={styles.avatar} src={avatar} alt=""/>
                <h2>Maks</h2>
            </div>
            <div>
                <p className={styles.postText}>{props.message}</p>
                <img className={styles.postPhoto} src={props.img} alt=""/>
            </div>
            <div className={styles.btnWrapper}>
                <p>Likes: {props.likes}</p>
                <button className={styles.btn}><img className={styles.btnImg} src={like} alt=""/></button>
                <button className={styles.btn}><img className={styles.btnImg} src={dislike} alt=""/></button>
            </div>
        </div>
    )
}

export default NewsFeedPost;