import React from 'react';
import {store} from "./redux/reduxStore";
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";

// let rerenderEntireTree = (state: any) => {
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
// }

// rerenderEntireTree(store.getState())
//
// store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state)
// })
//
//
