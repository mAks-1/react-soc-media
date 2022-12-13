const SET_USERS = "SET_USERS";

// USE THIS OBJ WITH LOCAL SERVER

// let initialState ={
//     friends: [],
// }


// USE THIS OBJ WITHOUT LOCAL SERVER

let initialState = {
    friends: [
        {
            userId: 1,
            userAvatar: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/friend-photo1.jpg?alt=media&token=361e5cdd-38c6-4223-92c8-0205ce00b9df',
            userBg: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/friend-bg1.jpg?alt=media&token=51f01220-d9e3-4b43-818e-4ce946438c94',
            followers: 452,
            name: 'Anna',
            location: 'Kyiv, Ukraine',
            friendsAmount: 333,
            videosAmount: 13,
            photosAmount: 37,
            postsAmount: 44,
            accountRegistered: 'November 2017'
        },
        {
            userId: 2,
            userAvatar: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/friend-photo2.jpg?alt=media&token=361e5cdd-38c6-4223-92c8-0205ce00b9df',
            userBg: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/friend-bg2.jpg?alt=media&token=51f01220-d9e3-4b43-818e-4ce946438c94',
            followers: 612,
            name: 'Andrew',
            location: 'Odessa, Ukraine',
            friendsAmount: 234,
            videosAmount: 7,
            photosAmount: 63,
            postsAmount: 21,
            accountRegistered: 'September 2018'
        },
        {
            userId: 3,
            userAvatar: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/friend-photo3.jpg?alt=media&token=361e5cdd-38c6-4223-92c8-0205ce00b9df',
            userBg: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/friend-bg3.jpg?alt=media&token=51f01220-d9e3-4b43-818e-4ce946438c94',
            followers: 412,
            name: 'Ben',
            location: 'London, UK',
            friendsAmount: 534,
            videosAmount: 19,
            photosAmount: 56,
            postsAmount: 32,
            accountRegistered: 'January 2018'
        },
        {
            userId: 4,
            userAvatar: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/friend-photo4.jpg?alt=media&token=361e5cdd-38c6-4223-92c8-0205ce00b9df',
            userBg: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/friend-bg4.jpg?alt=media&token=51f01220-d9e3-4b43-818e-4ce946438c94',
            followers: 792,
            name: 'Mike',
            location: 'Los-Angeles, USA',
            friendsAmount: 634,
            videosAmount: 28,
            photosAmount: 25,
            postsAmount: 12,
            accountRegistered: 'May 2020'
        },
        {
            userId: 5,
            userAvatar: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/friend-photo5.jpg?alt=media&token=361e5cdd-38c6-4223-92c8-0205ce00b9df',
            userBg: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/friend-bg5.jpg?alt=media&token=51f01220-d9e3-4b43-818e-4ce946438c94',
            followers: 419,
            name: 'Monica',
            location: 'Barcelona, Spain',
            friendsAmount: 421,
            videosAmount: 88,
            photosAmount: 27,
            postsAmount: 85,
            accountRegistered: 'June 2018'
        },
        {
            userId: 6,
            userAvatar: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/friend-photo6.jpg?alt=media&token=361e5cdd-38c6-4223-92c8-0205ce00b9df',
            userBg: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/friend-bg6.jpg?alt=media&token=51f01220-d9e3-4b43-818e-4ce946438c94',
            followers: 1242,
            name: 'Lara',
            location: 'İstanbul, Turkey',
            friendsAmount: 136,
            videosAmount: 17,
            photosAmount: 36,
            postsAmount: 49,
            accountRegistered: 'July 2019'
        },
        {
            userId: 7,
            userAvatar: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/friend-photo7.jpg?alt=media&token=361e5cdd-38c6-4223-92c8-0205ce00b9df',
            userBg: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/friend-bg7.jpg?alt=media&token=51f01220-d9e3-4b43-818e-4ce946438c94',
            followers: 783,
            name: 'Artem',
            location: 'Kharkiv, Ukraine',
            friendsAmount: 295,
            videosAmount: 23,
            photosAmount: 54,
            postsAmount: 67,
            accountRegistered: 'November 2019'
        }
    ]
}

const usersReducer =(state = initialState, action) => {
    switch (action.type){
        case SET_USERS:
            return{
                ...state,
                friends: action.friends
            };
        default:
            return state;
    }
}

export const setUsersCreator = (friends) => {
    return{
        type: SET_USERS,
        friends
    }
}

export default  usersReducer;