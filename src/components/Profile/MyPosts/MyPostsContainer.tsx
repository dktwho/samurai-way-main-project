import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootReducerType} from "../../../redux/reduxStore";



let mapStateToProps = (state: RootReducerType) => {
    return {
        postsData: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (newText: string) => {
            dispatch(changeNewTextAC(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)