import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/store";
import {PostsTypeProps2} from "../Profile";
import {MyPosts} from "./MyPosts";


export const MyPostsContainer = (props: PostsTypeProps2) => {
    const addPostContainer = () => {
        // props.addPost(props.newPostText)
        // props.dispatch({type: 'ADD-POST', postText: props.newPostText})
         props.dispatch(addPostAC(props.newPostText))
        // props.addPost()
    }

    const onPostChangeContainer = (newText: string) => {
        props.dispatch(changeNewTextAC(newText))
    }

    return (
        <MyPosts postsData={[]} newPostText={'d'}  addPost={addPostContainer} updateNewPostText={onPostChangeContainer}/>
    );
};
