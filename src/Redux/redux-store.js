import {combineReducers, createStore} from "redux";
import profilePageReducer from './profilePageReducer';
import newsFeedPageReducer from "./newsFeedReducer";
import {configure} from "@testing-library/react";

import { configureStore } from '@reduxjs/toolkit'


let reducers = combineReducers(
    {
        profilePage: profilePageReducer,
        newsFeedPage: newsFeedPageReducer
    }
);
let store = createStore(reducers);



// let reducers = configureStore(
//     {
//         profilePage: profilePageReducer,
//         newsFeedPage: newsFeedPageReducer
//     }
// );


export default store;