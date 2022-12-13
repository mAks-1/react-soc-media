import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from './Redux/redux-store';
import {Provider} from "react-redux";

// import temperateState from './data/state';


// import firebase from "firebase/compat/app";
// import 'firebase/database';
// import 'firebase/auth';
//
// firebase.initializeApp({
//     apiKey: "AIzaSyAGNVT6qCvApBc5TMkhIi9Q_RUKfyhos5U",
//     authDomain: "react-soc-media.firebaseapp.com",
//     databaseURL: "https://react-soc-media-default-rtdb.firebaseio.com",
//     projectId: "react-soc-media",
//     storageBucket: "react-soc-media.appspot.com",
//     messagingSenderId: "430497900923",
//     appId: "1:430497900923:web:8b0a327868725b091c75de",
//     measurementId: "G-2CV2Z4FWLM"
// });
//


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);



// const root = ReactDOM.createRoot(document.getElementById('root'));
//
// let renderDOM = (state) => {
//     root.render(
//         <BrowserRouter>
//             <App state={state} store={store} props={temperateState} dispatch={store.dispatch.bind(store)}/>
//         </BrowserRouter>
//     );
// }
//
// renderDOM(store.getState());
// store.subscribe(()=>{
//     let state = store.getState();
//     renderDOM(state);
// });
