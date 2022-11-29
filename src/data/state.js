let state = {
    friendsInfo:{
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
    },

    userPhotos:{
        photos: [
            {img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo1.jpg?alt=media&token=d4d2f72e-57be-4213-b90d-94389493db38', id: 1},
            {img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo2.jpg?alt=media&token=ba56f48f-8cac-4cd4-8087-d862a95e8925', id: 2},
            {img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo3.jpg?alt=media&token=6e714014-2e34-4f51-8223-f977f2c905ef', id: 3},
            {img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo4.jpg?alt=media&token=835e48c7-6a56-49c6-85fa-163d0dd7922c', id: 4},
            {img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo5.jpg?alt=media&token=85f791f6-38f6-4a96-afd9-84e2bb01132e', id: 5},
            {img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo6.jpg?alt=media&token=4836ab6d-68a5-4025-8eb5-71e67bcc0b29', id: 6},
            {img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo7.jpg?alt=media&token=ca147766-ab3f-43a4-985a-b3c1cc2b1a07', id: 7},
            {img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo8.jpg?alt=media&token=5fc490a4-bfb5-437a-a667-1e3436b5ce48', id: 8},
            {img: 'https://firebasestorage.googleapis.com/v0/b/react-soc-media.appspot.com/o/photo9.jpg?alt=media&token=cde2de46-9412-49d7-8f8c-490c5e412075', id: 9}
        ]
    }
};


export default state;