import {
    ActionsTypes,
    MyPostsType,
    ProfilePageType,
} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export const ADD_POST = 'profile/ADD-POST'
export const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
export const SET_STATUS = 'profile/SET-STATUS'

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

export type SetUserProfileActionType = ReturnType<typeof setUserProfileAC>

export const setUserProfileAC = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export type AddPostActionType = ReturnType<typeof addPostAC>

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText
    } as const
}


export type SetUserStatusActionType = ReturnType<typeof setUserStatusAC>
export const setUserStatusAC = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: MyPostsType = {id: new Date().getTime(), message: action.newPostText, likesCount: '0'}
            return {...state, posts: [...state.posts, newPost]}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default : {
            return state
        }
    }
}

export const getUserProfileThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    const res = await usersAPI.getProfile(userId)
    dispatch(setUserProfileAC(res.data))
}

export const getUsersStatusThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setUserStatusAC(res.data.status))
}

export const updateUsersStatusThunkCreator = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setUserStatusAC(status))
    }
}
