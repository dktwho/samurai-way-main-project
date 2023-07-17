import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";

const {messages, posts, dialogs} = state

ReactDOM.render(
    <App posts={posts} dialogsData={dialogs} messagesData={messages}/>,
    document.getElementById('root')
);