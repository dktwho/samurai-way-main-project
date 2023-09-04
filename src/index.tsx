import React from 'react';
// import {store} from "./redux/store";
import {store} from "./redux/reduxStore";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const StoreContext = React.createContext({})
let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App
                    appState={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                    state={state}
                    store={store}
                />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})


