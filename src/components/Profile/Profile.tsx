import React from 'react';
import styled from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div className={styled.content}>
            <div>
                <img
                    src="https://www.freewebheaders.com/wp-content/gallery/nature-size-800x200/beautiful-river-trees-snow-mountain-clouds-nature-landscape-web-header_size-800x200.jpg"
                    alt="profile-logo"
                />
            </div>
            <div>Ava + description</div>
            <MyPosts/>
        </div>
    );
};
