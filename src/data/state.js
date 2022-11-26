let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'new post 1', likesAmount: 17, img: '../../../../assets/post-photo1.jpg'},
            {id: 2, message: 'new post 2', likesAmount: 27, img: '../../../../assets/post-photo2.jpg'},
            {id: 3, message: 'new post 3', likesAmount: 15, img: '../../../../assets/post-photo3.jpg'},
            {id: 4, message: 'new post 4', likesAmount: 67, img: '../../../../assets/post-photo4.jpg'},
            {id: 5, message: 'new post 5', likesAmount: 72, img: '../../../../assets/post-photo5.jpg'},
            {id: 6, message: 'new post 6', likesAmount: 43, img: '../../../../assets/post-photo6.jpg'},
            {id: 7, message: 'new post 7', likesAmount: 123, img: '../../../../assets/post-photo7.jpg'},
            {id: 8, message: 'new post 8', likesAmount: 109, img: '../../../../assets/post-photo8.jpg'},
            {id: 9, message: 'new post 9', likesAmount: 170, img: '../../../../assets/post-photo9.jpg'},
            {id: 10, message: 'new post 10', likesAmount: 165, img: '../../../../assets/post-photo10.jpg'}
        ]
    },

    friendsInfo:{
        friends: [
            {
                userId: 1,
                userAvatar: '../../../friend-photo1.jpg',
                userBg: '../../../assets/friend-bg1.jpg',
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
                userAvatar: '../../../assets/friend-photo1.jpg',
                userBg: '../../../assets/friend-bg1.jpg',
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
                userAvatar: '../../../assets/friend-photo1.jpg',
                userBg: '../../../assets/friend-bg1.jpg',
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
                userAvatar: '../../../assets/friend-photo1.jpg',
                userBg: '../../../assets/friend-bg1.jpg',
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
                userAvatar: '../../../assets/friend-photo1.jpg',
                userBg: '../../../assets/friend-bg1.jpg',
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
                userAvatar: '../../../assets/friend-photo1.jpg',
                userBg: '../../../assets/friend-bg1.jpg',
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
                userAvatar: '../../../assets/friend-photo1.jpg',
                userBg: '../../../assets/friend-bg1.jpg',
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
            {img: '../../../assets/photo1.jpg', id: 1},
            {img: '../../../assets/photo2.jpg', id: 2},
            {img: '../../../assets/photo3.jpg', id: 3},
            {img: '../../../assets/photo4.jpg', id: 4},
            {img: '../../../assets/photo5.jpg', id: 5},
            {img: '../../../assets/photo6.jpg', id: 6},
            {img: '../../../assets/photo7.jpg', id: 7},
            {img: '../../../assets/photo8.jpg', id: 8},
            {img: '../../../assets/photo9.jpg', id: 9}
        ]
    }
};


export default state;