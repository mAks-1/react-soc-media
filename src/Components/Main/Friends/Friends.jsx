import React from "react";
import styles from './friends.module.css';
import '../../../style.css';
import Friend from "./Friend/Friend";


const Friends = (props) => {
    let friend = props.friends.map(friend => <Friend
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
    return(
        <div className={styles.wrapper}>
            {friend}
        </div>
    )
}

export default Friends;