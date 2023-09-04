import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, MyPostsType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

// export type StorePropsType2 = {
//     store: PostsTypeProps2
// }

export type PostsTypeProps2 = {
    postsData: MyPostsType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
    addPost: () => void
    updateNewPostText: () => void
    getState: () => void
}

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>

            {/*<MyPosts postsData={props.postsData}*/}
            {/*         addPost={props.addPost}*/}
            {/*         newPostText={props.newPostText}*/}
            {/*         // dispatch={props.dispatch}*/}
            {/*         updateNewPostText={props.updateNewPostText}*/}
            {/*/>*/}

            {/*<MyPostsContainer postsData={props.postsData}*/}
            {/*                  addPost={props.addPost}*/}
            {/*                  newPostText={props.newPostText}*/}
            {/*                  dispatch={props.dispatch}*/}
            {/*                  updateNewPostText={props.updateNewPostText}*/}
            {/*/>*/}

            <MyPostsContainer
            />
        </div>
    );
};
