import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from './Redux/redux-store';

import temperateState from './data/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderDOM = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} store={store} props={temperateState} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
    );
}

renderDOM(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    renderDOM(state);
});

// root.render(
// <BrowserRouter>
// <React.StrictMode>
// <App state={state}/>
// </React.StrictMode>
// </BrowserRouter>
// );