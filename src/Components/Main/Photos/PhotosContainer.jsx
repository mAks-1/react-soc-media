import React from "react";
import {connect} from "react-redux";
import {setPhotosCreator} from "../../../Redux/photosReducer";
import Photos from "./Photos";

let mapStateToProps = (state) => {
    return{
        photos: state.userPhotos.photos
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        setPhotos: (photos) => {
            dispatch(setPhotosCreator(photos));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Photos)