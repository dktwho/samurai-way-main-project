import React from 'react';
import styled from './MyPosts.module.css';
import {Post} from './Post/Post';


export type MyPostsType = {
    id: number
    message: string
    likesCount: string
}

type PostsTypeProps = {
    posts: MyPostsType[]
}

export const MyPosts = (props:PostsTypeProps ) => {

    let resultPostsData = props.posts.map(elem => {
        return (
            <Post key={elem.id} message={elem.message} likesCount={elem.likesCount}/>
        )
    })
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
            {resultPostsData}

        </div>
    );
};
