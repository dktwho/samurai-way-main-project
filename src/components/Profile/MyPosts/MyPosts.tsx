import React from 'react';
import styled from './MyPosts.module.css';
import {Post} from './Post/Post';
import {MyPostsType} from "../../../redux/store";
import {Field, reduxForm} from "redux-form";

export type PostsTypeProps3 = {
    postsData: MyPostsType[]
    newPostText: string
    addPost: (value: string) => void
}


export const MyPosts = (props: PostsTypeProps3) => {
    let resultPostsData = props.postsData.map(elem => {
        return (
            <Post key={elem.id} message={elem.message} likesCount={elem.likesCount}/>
        )
    })

    const addPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={styled.postBlock}>
            <h3> My Posts</h3>
            <AddNewPostFormRedux onSubmit={addPost}/>
            <div className={styled.posts}>New post</div>
            {resultPostsData}
        </div>
    );
};

const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={'textarea'} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostFrom'})(AddNewPostForm)