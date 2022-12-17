import React from "react";
import styles from './posts.module.css';
import Post from "./Post/Post";
import axios from "axios";

const Posts = (props) => {
    // if(props.posts.length === 0){
    //     axios
    //         .get('http://localhost:3000/posts')
    //         .then(response => {
    //             props.setPosts(response.data.posts);
    //         })
    // }
    let postElement = props.posts.map(post => <Post liked={props.isLiked} likePost={props.likePost} id={post.id} key={post.id} message={post.message} img={post.img} likes={post.likesAmount}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return(
        <div>
            <div className="create-post-block">
                <h1>My recent posts</h1>
                <textarea placeholder='Add some text to your post' onChange={onPostChange} ref={newPostElement} value={props.newPostText} name="add-post" cols="40" rows="2"></textarea>
                <button onClick={addPost} className="post-post">Post</button>
            </div>
            <div>
                {postElement}
            </div>
        </div>

    )
}


export default Posts;