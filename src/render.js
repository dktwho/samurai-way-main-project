import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {state, addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {RootStateType} from "./redux/state";



export const rerenderEntireTree = (state ) => {
    ReactDOM.render(
        <BrowserRouter>
            <App  appState={state} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

