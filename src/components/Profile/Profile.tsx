import React from 'react';
import styled from './Profile.module.css';
import {MyPosts, MyPostsType} from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = ( ) => {

    const postsData  = [
        {id: 1, message: 'Post 1', likesCount: '13'},
        {id: 2, message: 'Post 2', likesCount: '22'},
        {id: 3, message: 'Post 3', likesCount: '63'},
        {id: 4, message: 'Post 4', likesCount: '45'},
        {id: 5, message: 'Post 5', likesCount: '95'},
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={postsData}/>
        </div>
    );
};
