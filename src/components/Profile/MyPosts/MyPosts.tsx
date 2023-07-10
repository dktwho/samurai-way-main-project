import React from 'react';
import styled from './MyPosts.module.css';
import {Post} from './Post/Post';


type MyPostsType = {
    id: number
    message: string
    likesCount: string
}

export const MyPosts = () => {

    const postsData: MyPostsType[] = [
        {id: 1, message: 'Post 1', likesCount: '13'},
        {id: 2, message: 'Post 2', likesCount: '22'},
        {id: 3, message: 'Post 3', likesCount: '63'},
        {id: 4, message: 'Post 4', likesCount: '45'},
        {id: 4, message: 'Post 5', likesCount: '95'},
    ]
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
            {postsData.map(elem => {
                return (
                    <Post key={elem.id} message={elem.message} likesCount={elem.likesCount}/>
                )
            })}
            {/*<Post message={'Hello'} likesCount={15}/>*/}
            {/*<Post message={'Hi'} likesCount={20}/>*/}
        </div>
    );
};
