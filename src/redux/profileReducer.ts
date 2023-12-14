import {MyPostsType, ProfilePageType,} from "./store";
import {AnyAction, Dispatch} from "redux";
import {ResultCodeEnum} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {stopSubmit} from "redux-form";
import {PhotoType, ResponseProfileType} from "../components/Profile/ProfileContainer";
import {profileAPI} from "../api/profileAPI";


const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_STATUS = 'profile/SET-STATUS'
const SET_PHOTO = 'profile/SET-PHOTO'


let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Post 1', likesCount: '13'},
        {id: 2, message: 'Post 2', likesCount: '22'},
        {id: 3, message: 'Post 3', likesCount: '63'},
        {id: 4, message: 'Post 4', likesCount: '45'},
        {id: 5, message: 'Post 5', likesCount: '95'},
    ],
    newPostText: '',
    profile: {
        aboutMe: 'about me default text',
        contacts: {
            facebook: 'string facebook ',
            website: 'any website string',
            vk: 'string vk',
            twitter: 'string twitter',
            instagram: 'string instagram',
            youtube: 'any youtube',
            github: 'string github',
            mainLink: 'any mainLink',
        },
        lookingForAJob: false,
        lookingForAJobDescription: 'string lookingForAJobDescription',
        fullName: ' fullName string',
        userId: 10000,
        photos: {
            small: 'string small photo',
            large: 'string large photo',
        }
    },
    status: '',
}

// actions type
type ActionsTypes =
    AddPostActionType
    | SetUserProfileActionType
    | SetUserStatusActionType
    | SavePhotoActionType


// action creator with type
export type SetUserProfileActionType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: ResponseProfileType) => {
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

export type SavePhotoActionType = ReturnType<typeof savePhotoAC>
export const savePhotoAC = (photos: PhotoType) => {
    return {
        type: SET_PHOTO,
        photos
    } as const
}
// reducer
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
        case SET_PHOTO: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default : {
            return state
        }
    }
}


// thunks
export const getUserProfileThunkCreator = (userId: number) => async (dispatch: Dispatch<ActionsTypes>) => {
    const res = await profileAPI.getProfile(userId)
    dispatch(setUserProfileAC(res.data))
}

export const getUsersStatusThunkCreator = (userId: number) => async (dispatch: Dispatch<ActionsTypes>) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setUserStatusAC(res.data.status))
}

export const updateUsersStatusThunkCreator = (status: string) => async (dispatch: Dispatch<ActionsTypes>) => {
    try {
        const res = await profileAPI.updateStatus(status)
        if (res.data.resultCode === ResultCodeEnum.Success) {
            dispatch(setUserStatusAC(status))
        }
    } catch (error) {
        console.log(error)
    }
}

export const savePhotoThunkCreator = (photos: any) => async (dispatch: Dispatch<ActionsTypes>) => {
    const res = await profileAPI.savePhoto(photos)
    if (res.data.resultCode === ResultCodeEnum.Success) {
        dispatch(savePhotoAC(res.data.data.photos))
    }
}

export const saveProfileThunkCreator = (profile: any): ThunkAction<Promise<void>, any, any, AnyAction> => async (dispatch, getState) => {
    const userId = getState().auth.id
    const res = await profileAPI.saveProfile(profile)
    if (res.data.resultCode === ResultCodeEnum.Success) {
        dispatch(getUserProfileThunkCreator(userId))
    } else {
        dispatch(stopSubmit('edit-profile', {_error: res.data.messages[0]}))
        return Promise.reject(res.data.messages[0])
    }
}
