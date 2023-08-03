import React from 'react';
import styled from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsTypeProps} from "../../redux/state";


export const Profile = (props: PostsTypeProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData} addPost={props.addPost} newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};
