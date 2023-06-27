import React from 'react';
import styled from './MyPosts.module.css';
import {Post} from './Post/Post';


export const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className="posts">New post</div>
            <Post message={'Hello'} likesCount={15}/>
            <Post message={'Hi'} likesCount={20}/>
        </div>
    );
};
