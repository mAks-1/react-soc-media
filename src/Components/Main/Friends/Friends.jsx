import React from "react";
import styles from './friends.module.css';
import '../../../style.css';
import Friend from "./Friend/Friend";

let friends = [
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
];

let friend = friends.map(friend => <Friend
    key={friend.id}
    avatar={friend.userAvatar}
    bg={friend.userBg}
    followers={friend.followers}
    name={friend.name}
    location={friend.location}
    friends={friend.friendsAmount}
    videos={friend.videosAmount}
    photos={friend.photosAmount}
    posts={friend.postsAmount}
    accountRegistered={friend.accountRegistered}
    />
)

const Friends = () => {
    return(
        <div className={styles.wrapper}>
            {friend}
        </div>
    )
}

export default Friends;