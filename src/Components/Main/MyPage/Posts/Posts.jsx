import React from "react";
import styles from './posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let postElement = props.posts.map(post => <Post key={post.id} message={post.message} likes={post.likesAmount} img={post.img}/>);
    return(
        <div>
            {postElement}
        </div>
    )
}

export default Posts;