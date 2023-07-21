import React, {useRef} from 'react';
import styled from './MyPosts.module.css';
import {Post} from './Post/Post';


export type MyPostsType = {
    id: number
    message: string
    likesCount: string
}

export type PostsTypeProps = {
    postsData: MyPostsType[]
    addPost: (text: string ) => void
}

export const MyPosts = (props:PostsTypeProps ) => {

    let resultPostsData = props.postsData.map(elem => {
        return (
            <Post key={elem.id} message={elem.message} likesCount={elem.likesCount}/>
        )
    })

    let newPostEl = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        if(newPostEl.current) {
            // newPostEl.current.focus()
            // props.addPost(newPostEl.current.focus())
        }

        // let text = newPostEl.current?.value
        // if (text !== null) {
        //     props.addPost(text)
        // }

    }
    return (
        <div className={styled.postBlock}>
            <h3> My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostEl} ></textarea>
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
