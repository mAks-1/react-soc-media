import React from "react";
import styles from './posts.module.css';
import Post from "./Post/Post";

let posts = [
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
];

let postElement = posts.map(post => <Post key={post.id} message={post.message} likes={post.likesAmount} img={post.img}/>);

const Posts = () => {
    return(
        <div>
            {postElement}
        </div>
    )
}

export default Posts;