import React from "react";
import {setUsersCreator} from "../../../Redux/usersReducer";
import {connect} from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {
    return{
        friends: state.usersPage.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        setUsers: (friends) => {
            dispatch(setUsersCreator(friends));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Friends);