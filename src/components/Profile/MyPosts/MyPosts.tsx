import React, {createRef, useRef} from 'react';
import styled from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostsTypeProps} from "../../../redux/state";


export const MyPosts = (props: PostsTypeProps) => {

    let resultPostsData = props.postsData.map(elem => {
        return (
            <Post key={elem.id} message={elem.message} likesCount={elem.likesCount}/>
        )
    })

    let newPostEl = createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if (newPostEl.current) {
            props.addPost(newPostEl.current.value)
            newPostEl.current.value = ''
        }
    }

    return (
        <div className={styled.postBlock}>
            <h3> My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostEl}></textarea>
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
