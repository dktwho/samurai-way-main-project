import React from 'react';
import styled from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, MyPostsType} from "../../redux/store";


export type PostsTypeProps2 = {
    postsData: MyPostsType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
    addPost: () => void
    updateNewPostText: () => void

}
export const Profile = (props: PostsTypeProps2) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     // dispatch={props.dispatch}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};
