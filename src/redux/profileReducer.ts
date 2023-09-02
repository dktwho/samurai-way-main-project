import {ActionsTypes, MyPostsType} from "./store";


export const profileReducer = (state: any, action: ActionsTypes) => {
    switch (action.type) {

        case 'ADD-POST': {
            const newPost: MyPostsType = {id: new Date().getTime(), message: action.postText, likesCount: '0'}
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        }

        case 'CHANGE-NEW-TEXT' : {
            state.newPostText = action.newText
            return state
        }
        default : {
            return state
        }
    }


}