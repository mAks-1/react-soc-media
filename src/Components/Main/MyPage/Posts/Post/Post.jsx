import styles from './post.module.css';
import like from '../../../../../assets/like.png';
import dislike from '../../../../../assets/dislike.png';
import avatar from '../../../../../assets/user-photo1.jpg';

const Post = (props) => {
    return (
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
                <button
                    // onClick={() => {props.likePost(props.id)}}
                    onClick={props.isLiked ? null : () => {props.likePost(props.id)}}
                    className={styles.btn}><img className={styles.btnImg} src={like} alt=""/></button>
                <button className={styles.btn}><img className={styles.btnImg} src={dislike} alt=""/></button>
            </div>
        </div>
    )
}

export default Post;