import React from 'react';
import {store} from "./redux/reduxStore";
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {SamuraiTSApp} from "./App";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <SamuraiTSApp/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
