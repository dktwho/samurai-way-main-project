import React from 'react';
import styled from './Profile.module.css';
import {MyPosts,  PostsTypeProps} from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = (props: PostsTypeProps ) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};
