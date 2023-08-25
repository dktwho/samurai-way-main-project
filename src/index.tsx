import React from 'react';
import {store} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                 // updateNewPostText={store.updateNewPostText.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree)
rerenderEntireTree()

