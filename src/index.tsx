import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, addPost} from "./redux/state";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App  appState={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree()