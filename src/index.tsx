import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const postsData  = [
    {id: 1, message: 'Post 1', likesCount: '13'},
    {id: 2, message: 'Post 2', likesCount: '22'},
    {id: 3, message: 'Post 3', likesCount: '63'},
    {id: 4, message: 'Post 4', likesCount: '45'},
    {id: 5, message: 'Post 5', likesCount: '95'},
]

let dialogsData = [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Bill'},
    {id: 3, name: 'Sam'},
    {id: 4, name: 'Tedd'},
    {id: 5, name: 'John'},
]

let messagesData  = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'Fine'},
    {id: 5, message: 'Good'},
]



ReactDOM.render(
    <App posts={postsData} dialogsData={dialogsData} messagesData={messagesData}  />,
  document.getElementById('root')
);