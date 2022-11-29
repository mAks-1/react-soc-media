import React from "react";
import styles from './posts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../../Redux/profilePageReducer";

const Posts = (props) => {

    // console.log(props.posts)

    let postElement = props.posts.map(post => <Post key={post.id} message={post.message} img={post.img} likes={post.likesAmount}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
        newPostElement.current.value = '';
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = UpdateNewPostTextActionCreator(text);
        props.dispatch(action);
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