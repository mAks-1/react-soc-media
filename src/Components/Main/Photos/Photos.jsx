import React from "react";
import './photos.css';
import '../../../style.css';
import Photo from "./Photo/Photo";

import l from '../../../assets/photo1.jpg';

let photosState = [
    {img: '../../../assets/photo1.jpg', id: 1},
    {img: '../../../assets/photo2.jpg', id: 2},
    {img: '../../../assets/photo3.jpg', id: 3},
    {img: '../../../assets/photo4.jpg', id: 4},
    {img: '../../../assets/photo5.jpg', id: 5},
    {img: '../../../assets/photo6.jpg', id: 6},
    {img: '../../../assets/photo7.jpg', id: 7},
    {img: '../../../assets/photo8.jpg', id: 8},
    {img: '../../../assets/photo9.jpg', id: 9}
];

let photosElement = photosState.map(photo => <Photo key={photo.id} src={photo.img}/>);


const Photos = (props) => {
    // let photosElement = props.photos.map(photo => <Photo key={photo.id} src={photo.img}/>);

    return(
        <div className="photos-wrapper">
            <div className="block">
                <h1>Photos: 9</h1>
            </div>
            <div className="photos">
                {photosElement}
            </div>
        </div>
    )
}

export default Photos;