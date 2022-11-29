import React from "react";
import style from './photo.module.css';

const Photo = (props) => {
    return(
        <div className={style.div}>
            <img className={style.img} src={props.src} alt=""/>
        </div>
    )
}

export default Photo;