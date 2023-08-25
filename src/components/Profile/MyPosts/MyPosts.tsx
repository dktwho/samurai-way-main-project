import React, {ChangeEvent} from 'react';
import styled from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostsTypeProps} from "../../../redux/state";


export const MyPosts = (props: PostsTypeProps) => {

    let resultPostsData = props.postsData.map(elem => {
        return (
            <Post key={elem.id} message={elem.message} likesCount={elem.likesCount}/>
        )
    })

    const addPost = () => {
        // props.addPost(props.newPostText)
        props.dispatch({ type: 'ADD-POST', postText: props.newPostText })
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        // props.updateNewPostText(newText)
        props.dispatch({type: 'CHANGE-NEW-TEXT', newText})

    }

    return (
        <div className={styled.postBlock}>
            <h3> My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={styled.posts}>New post</div>
            {resultPostsData}
        </div>
    );
};
