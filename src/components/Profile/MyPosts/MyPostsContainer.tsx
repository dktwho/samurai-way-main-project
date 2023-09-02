import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/store";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = (props: any) => {
    let stateFromProps = props.store.getState()
    const addPostContainer = () => {
        props.store.dispatch(addPostAC(stateFromProps.profilePage.newPostText))
    }

    const onPostChangeContainer = (newText: string) => {
        props.store.dispatch(changeNewTextAC(newText))

    }

    return (
        <MyPosts
            postsData={stateFromProps.profilePage.posts}
            newPostText={stateFromProps.profilePage.newPostText}
            addPost={addPostContainer}
            updateNewPostText={onPostChangeContainer}/>
    );
};
