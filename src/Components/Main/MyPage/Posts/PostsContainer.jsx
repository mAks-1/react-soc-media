import React from "react";
import {
    addPostActionCreator,
    setPostsCreator,
    UpdateNewPostTextActionCreator,
    likePostActionCreator
}
from "../../../../Redux/profilePageReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(UpdateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        setPosts: (posts) => {
            dispatch(setPostsCreator(posts));
        },
        likePost: (id) => {
            dispatch(likePostActionCreator(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Posts);