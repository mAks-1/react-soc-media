const ADD_NEWSFEED_POST = 'ADD-NEWSFEED-POST';
const UPDATE_NEW_NEWSFEED_POST_TEXT = 'UPDATE-NEW-NEWSFEED-POST-TEXT';

let initialStateNewsFeed = {
    newsFeedPosts:[
        // {id: 1, message: 'new post 1', likesAmount: 15, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo1.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'}
    ],
    newsFeedPostText: ''
}

let idCounter1 = initialStateNewsFeed.newsFeedPosts.length;

const newsFeedPageReducer = (state = initialStateNewsFeed, action) => {
    switch (action.type){
        case ADD_NEWSFEED_POST:
            idCounter1++;
            let newsFeedPost = {
                id: idCounter1,
                message: state.newsFeedPostText,
                img: "https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/newpost.png?alt=media&token=bcb36f62-8e8a-4a28-9f07-84a5467d08a6" ,
                likesAmount: 0
            }
            return{
                ...state,
                newsFeedPosts: [...state.newsFeedPosts, newsFeedPost],
                newsFeedPostText: ''
            };

        case UPDATE_NEW_NEWSFEED_POST_TEXT:
            return{
                ...state,
                newsFeedPostText: action.newText
            };

        default:
            return state;
    }

}

export const addNewsFeedPostActionCreator = () =>{
    return{
        type: ADD_NEWSFEED_POST
    }
}

export const UpdateNewsFeedPostTextActionCreator = (text) =>{
    return{
        type: UPDATE_NEW_NEWSFEED_POST_TEXT,
        newText: text
    }
}

export default newsFeedPageReducer;