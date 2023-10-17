import {
    ActionsTypes,
    MyPostsType,
    ProfilePageType,
    setUserProfileAC,
} from "./store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";


let initialState = {
    posts: [
        {id: 1, message: 'Post 1', likesCount: '13'},
        {id: 2, message: 'Post 2', likesCount: '22'},
        {id: 3, message: 'Post 3', likesCount: '63'},
        {id: 4, message: 'Post 4', likesCount: '45'},
        {id: 5, message: 'Post 5', likesCount: '95'},
    ],
    newPostText: '',
    profile: null
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: MyPostsType = {id: new Date().getTime(), message: state.newPostText, likesCount: '0'}
            state.newPostText = ''
            return {...state, posts: [...state.posts, newPost]}
        }

        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }

        case 'CHANGE-NEW-TEXT' : {
            return {...state, newPostText: action.newText}
        }
        default : {
            return state
        }
    }
}

export const getUserProfileThunkCreator = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfileAC(res.data))
        })
}