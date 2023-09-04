import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/store";
import {StoreContext} from '../../../storeContext';
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = (props: any) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const addPostContainer = () => {
                        props.store.dispatch(addPostAC(store.getState().profilePage.newPostText))
                    }

                    const onPostChangeContainer = (newText: string) => {
                        props.store.dispatch(changeNewTextAC(newText))
                    }
                    return (
                        <MyPosts
                            postsData={store.getState().profilePage.posts}
                            newPostText={store.getState().profilePage.newPostText}
                            addPost={addPostContainer}
                            updateNewPostText={onPostChangeContainer}/>
                    )

                }
            }
        </StoreContext.Consumer>

    );
};
