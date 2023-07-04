import React from 'react';
import styled from './MyPosts.module.css';
import {Post} from './Post/Post';


export const MyPosts = () => {
    return (
        <div className={styled.postBlock}>
            <h3> My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styled.posts}>New post</div>
            <Post message={'Hello'} likesCount={15}/>
            <Post message={'Hi'} likesCount={20}/>
        </div>
    );
};
