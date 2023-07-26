import React from 'react';
import styled from './Post.module.css';
import {MessagePropTypes} from "../../../../redux/state";


export const Post = ({message, likesCount}: MessagePropTypes) => {

    return (
        <div className={styled.item}>
            <img src="https://rambabu.ca/assets/img/avatars/avatar.png" alt="avatar"/>
            {message}
            <div>
                <span>{likesCount}</span>
            </div>
        </div>
    );
};
