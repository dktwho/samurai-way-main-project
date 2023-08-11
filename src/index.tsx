import React from 'react';
import {state} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText, RootStateType} from "./redux/state";
import {subscribe} from "./redux/state";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
subscribe(rerenderEntireTree)
rerenderEntireTree()

