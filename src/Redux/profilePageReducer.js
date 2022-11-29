const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: 1, message: 'new post 1', likesAmount: 17, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo1.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 2, message: 'new post 2', likesAmount: 27, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo2.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 3, message: 'new post 3', likesAmount: 15, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo3.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 4, message: 'new post 4', likesAmount: 67, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo4.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 5, message: 'new post 5', likesAmount: 72, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo5.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 6, message: 'new post 6', likesAmount: 43, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo6.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 7, message: 'new post 7', likesAmount: 123, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo7.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 8, message: 'new post 8', likesAmount: 109, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo8.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 9, message: 'new post 9', likesAmount: 170, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo9.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'},
        {id: 10, message: 'new post 10', likesAmount: 165, img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/post-photo10.jpg?alt=media&token=ed44d8a2-0458-40b9-a4a7-d750c3905f68'}
    ],
    newPostText: 'new post text'
};

let idCounter = initialState.posts.length;


const profilePageReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            idCounter++;
            let newPost = {
                id: idCounter,
                message: state.newPostText,
                img: "https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/newpost.png?alt=media&token=bcb36f62-8e8a-4a28-9f07-84a5467d08a6" ,
                likesAmount: 0
            }

            state.posts.push(newPost);
            state.newPostText = '';
            console.log(state)
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

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

export default profilePageReducer;