import React from 'react';
// import {store} from "./redux/store";
import {store} from "./redux/reduxStore";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                     appState={store.getState()}
                     dispatch={store.dispatch.bind(store)}
                    // updateNewPostText={store.updateNewPostText.bind(store)}
                      store={store}
                />
            </Provider>

        </BrowserRouter>,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree)
rerenderEntireTree()

