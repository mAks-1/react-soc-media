import React from "react";
import style from './newsfeed.module.css';
import '../../../style.css';
import {addNewsFeedPostActionCreator, UpdateNewsFeedPostTextActionCreator} from "../../../Redux/newsFeedReducer";
import NewsFeedPost from "./NewsFeedPost/NewsFeedPost";


const Newsfeed = (props) => {
    let newsFeedElement = props.newsFeedPosts.map(elem => <NewsFeedPost key={elem.id} message={elem.message} img={elem.img} likes={elem.likesAmount}/>);
    let newNewsFeedElement = React.createRef();

    let addPost = () => {
        props.addNewsFeedPost();
    }

    let onPostChange = () => {
        let text = newNewsFeedElement.current.value;
        props.updateNewsFeedPostText(text);
    }

    return (
        <div className={style.newsFeedBlock}>
            <div className="create-post-block news-feed-wrapper">
                <h1>Newsfeed</h1>
                <textarea placeholder='Add some text to your post' onChange={onPostChange} ref={newNewsFeedElement} value={props.newsFeedPostText} name="add-post" cols="40" rows="2"></textarea>
                <button onClick={addPost} className="post-post">Post</button>
            </div>
            <div>
                {newsFeedElement}
            </div>
        </div>

    )
}

export default Newsfeed;