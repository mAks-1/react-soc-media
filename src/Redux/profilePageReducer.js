const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_POSTS = 'SET_POSTS';
const LIKE_POST = 'LIKE_POST';

// WITHOUT LOCAL SERVER USE THIS OBJECT

let initialState = {
    posts: [
        {id: 1, isLiked: false, message: 'new post 1', likesAmount: 17, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo1.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 2, isLiked: false, message: 'new post 2', likesAmount: 27, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo2.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 3, isLiked: false, message: 'new post 3', likesAmount: 15, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo3.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 4, isLiked: false, message: 'new post 4', likesAmount: 67, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo4.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 5, isLiked: false, message: 'new post 5', likesAmount: 72, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo5.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 6, isLiked: false, message: 'new post 6', likesAmount: 43, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo6.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 7, isLiked: false, message: 'new post 7', likesAmount: 123, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo7.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 8, isLiked: false, message: 'new post 8', likesAmount: 109, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo8.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 9, isLiked: false, message: 'new post 9', likesAmount: 170, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo9.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 10, isLiked: false, message: 'new post 10', likesAmount: 165, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo10.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'}
    ],
    newPostText: ''
};



// WITH LOCAL SERVER USE THIS OBJECT

// let initialState = {
//     posts: [],
//     newPostText: ''
// }

let idCounter = initialState.posts.length;


const profilePageReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            idCounter++;
            let newPost = {
                id: idCounter,
                isLiked: false,
                message: state.newPostText,
                img: "https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/newpost.png?alt=media&token=bcb36f62-8e8a-4a28-9f07-84a5467d08a6" ,
                likesAmount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        case SET_POSTS:
            return{
                ...state,
                posts: action.posts
            }

        case LIKE_POST:
            let indexOfPost = state.posts.findIndex(post => post.id === action.id);
            if(state.posts[indexOfPost].isLiked == false){
                state.posts[indexOfPost].likesAmount += 1;
                state.posts[indexOfPost].isLiked = true;
            }

            return{
                ...state,
                posts: [...state.posts]
            }

        default:
            return state;
    }

}

export const addPostActionCreator = () =>{
    return{
        type: ADD_POST
    }
}

export const UpdateNewPostTextActionCreator = (text) =>{
    return{
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const setPostsCreator = (posts) => {
    return{
        type: SET_POSTS,
        posts
    }
}

export const likePostActionCreator = (id) => {
    return{
        type: LIKE_POST,
        id: id
    }
}

export default profilePageReducer;