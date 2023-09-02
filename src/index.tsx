import React from 'react';
// import {store} from "./redux/store";
import {store} from "./redux/reduxStore";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
                <App
                    appState={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                    // updateNewPostText={store.updateNewPostText.bind(store)}
                    state={state}
                />

        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})


