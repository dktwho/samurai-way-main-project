import React from 'react';
import styled from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div className={styled.content}>
            <div>
                <img
                    src="https://cdn-icons-png.flaticon.com/256/206/206853.png"
                    alt="profile-logo"
                />
            </div>
            <div>Ava + description</div>
            <MyPosts/>
        </div>
    );
};
