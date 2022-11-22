import React from "react";
import './newsfeed.css';
import '../../../style.css';

const Newsfeed = () => {
    return (
        <div className="create-post-block news-feed-wrapper">
            <h1>Newsfeed</h1>
            <textarea name="add-post" placeholder="Add some text to your post" cols="40" rows="2"></textarea>
            <button className="post-post">Post</button>
        </div>
    )
}

export default Newsfeed;