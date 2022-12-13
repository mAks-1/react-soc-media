import {combineReducers, createStore} from "redux";
import profilePageReducer from './profilePageReducer';
import newsFeedPageReducer from "./newsFeedReducer";
import usersReducer from "./usersReducer";
import photosReducer from "./photosReducer";

let reducers = combineReducers(
    {
        profilePage: profilePageReducer,
        newsFeedPage: newsFeedPageReducer,
        usersPage: usersReducer,
        userPhotos: photosReducer
    }
);

let store = createStore(reducers);


export default store;