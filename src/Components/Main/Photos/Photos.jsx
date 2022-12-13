import React from "react";
import './photos.css';
import '../../../style.css';
import Photo from "./Photo/Photo";
import axios from "axios";



const Photos = (props) => {

    // if(props.photos.length === 0){
    //     axios
    //         .get('http://localhost:3000/photos')
    //         .then(response => {
    //            props.setPhotos(response.data.photos);
    //          })
    // }

    let photosElement = props.photos.map(photo => <Photo key={photo.id} src={photo.img}/>);

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