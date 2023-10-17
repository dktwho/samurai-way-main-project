import React from 'react';
import styled from './Post.module.css';
import {MessagePropTypes} from "../../../../redux/store";


export const Post = ({message, likesCount}: MessagePropTypes) => {

    return (
        <div className={styled.item}>
            <img
                src='https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'
                alt="avatar"/>
            {message}
            <div>
                <span>{likesCount}</span>
            </div>
        </div>
    );
};
