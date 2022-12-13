const SET_PHOTO = 'SET_PHOTO';

// USE THIS OBJ WITH LOCAL SERVER

// let initialState ={
//     photos:[],
// };


// USE THIS OBJ WITHOUT LOCAL SERVER

let initialState ={
    photos: [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo1.jpg?alt=media&token=d4d2f72e-57be-4213-b90d-94389493db38',
            id: 1
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo2.jpg?alt=media&token=ba56f48f-8cac-4cd4-8087-d862a95e8925',
            id: 2
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo3.jpg?alt=media&token=6e714014-2e34-4f51-8223-f977f2c905ef',
            id: 3
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo4.jpg?alt=media&token=835e48c7-6a56-49c6-85fa-163d0dd7922c',
            id: 4
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo5.jpg?alt=media&token=85f791f6-38f6-4a96-afd9-84e2bb01132e',
            id: 5
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo6.jpg?alt=media&token=4836ab6d-68a5-4025-8eb5-71e67bcc0b29',
            id: 6
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo7.jpg?alt=media&token=ca147766-ab3f-43a4-985a-b3c1cc2b1a07',
            id: 7
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo8.jpg?alt=media&token=5fc490a4-bfb5-437a-a667-1e3436b5ce48',
            id: 8
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo9.jpg?alt=media&token=cde2de46-9412-49d7-8f8c-490c5e412075',
            id: 9
        }
    ],
};


const photosReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_PHOTO:
            return{
                ...state,
                photos: action.photos
            };
        default:
            return state;
    }
}

export const setPhotosCreator = (photos) => {
    return{
        type: SET_PHOTO,
        photos
    }
}

export default photosReducer;