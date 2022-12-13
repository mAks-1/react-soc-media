import React from "react";
import {addNewsFeedPostActionCreator, UpdateNewsFeedPostTextActionCreator} from "../../../Redux/newsFeedReducer";
import {connect} from "react-redux";
import Newsfeed from "./Newsfeed";

let mapStateToProps = (state) => {
    return {
        newsFeedPosts: state.newsFeedPage.newsFeedPosts,
        newsFeedPostText: state.newsFeedPage.newsFeedPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewsFeedPostText: (text) => {
            dispatch(UpdateNewsFeedPostTextActionCreator(text))
        },
        addNewsFeedPost: () => {
            dispatch(addNewsFeedPostActionCreator())
        }
    }
}

const NewsFeedPostsContainer = connect(mapStateToProps, mapDispatchToProps) (Newsfeed);

export default NewsFeedPostsContainer;