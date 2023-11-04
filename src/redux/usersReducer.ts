import {
    ActionsTypes
} from "./store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

// type
export type UserType = {
    id: number,
    name: string,
    photos: {
        small: string,
        large: string
    },
    status: string,
    followed: boolean,

}
export type InitialStateType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
    followingInProgress: Array<number>
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET-USERS'
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'users/SET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE-IS-FOLLOWING-PROGRESS'

// Reducer
export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : user)
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : user)
            }
        }
        case SET_USERS: {
            return {...state, users: [...action.users, ...state.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default : {
            return state
        }
    }
}

// AC type
export type FollowACType = ReturnType<typeof followSuccessAC>
export const followSuccessAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export type UnFollowACType = ReturnType<typeof unFollowSuccessAC>
export const unFollowSuccessAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}

export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}


export type SetTotalCountACType = ReturnType<typeof setTotalCountAC>
export const setTotalCountAC = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        totalUsersCount
    } as const
}

export type ToggleIsFetchingProgressACType = ReturnType<typeof toggleIsFetchingProgressAC>
export const toggleIsFetchingProgressAC = (isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    } as const
}


// thunksCreator
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    dispatch(setCurrentPageAC(currentPage))
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetchingAC(false))
    dispatch(setUsersAC(data.items))
    dispatch(setTotalCountAC(data.totalCount))
}

export const followThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingProgressAC(true, userId))
    const res = await usersAPI.follow(userId)
    if (res.data.resultCode === 0) {
        dispatch(followSuccessAC(userId))
    }
    dispatch(toggleIsFetchingProgressAC(false, userId))
    dispatch(followSuccessAC(userId))
}

export const unFollowThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingProgressAC(true, userId))
    const res = await usersAPI.unfollow(userId)
    if (res.data.resultCode === 0) {
        dispatch(unFollowSuccessAC(userId))
    }
    dispatch(toggleIsFetchingProgressAC(false, userId))
}


