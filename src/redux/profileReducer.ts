import {
    ActionsTypes,
    MyPostsType,
    ProfilePageType,
    setUserProfileAC, setUserStatusAC,
} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";


let initialState = {
    posts: [
        {id: 1, message: 'Post 1', likesCount: '13'},
        {id: 2, message: 'Post 2', likesCount: '22'},
        {id: 3, message: 'Post 3', likesCount: '63'},
        {id: 4, message: 'Post 4', likesCount: '45'},
        {id: 5, message: 'Post 5', likesCount: '95'},
    ],
    newPostText: '',
    profile: null,
    status: 'status from global state redux'
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: MyPostsType = {id: new Date().getTime(), message: action.newPostText, likesCount: '0'}
            return {...state, posts: [...state.posts, newPost]}
        }

        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
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

export const getUsersStatusThunkCreator = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setUserStatusAC(res.data.status))
        })
}

export const updateUsersStatusThunkCreator = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatusAC(status))
            }
        })
}
