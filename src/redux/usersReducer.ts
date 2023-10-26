import {
    ActionsTypes, followSuccessAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    toggleIsFetchingProgressAC, unFollowSuccessAC
} from "./store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

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
export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : user)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : user)
            }
        }
        case "SET-USERS": {
            return {...state, users: [...action.users, ...state.users]}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }

        case 'SET-TOTAL-COUNT': {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE-IS-FOLLOWING-PROGRESS": {
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


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    dispatch(setCurrentPageAC(currentPage))
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
        // dispatch(setCurrentPageAC(currentPage))
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setTotalCountAC(data.totalCount))
    })
}

export const followThunkCreator = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingProgressAC(true, userId))
    usersAPI.follow(userId).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(followSuccessAC(userId))
        }
        dispatch(toggleIsFetchingProgressAC(false, userId))
    });
    dispatch(followSuccessAC(userId))
}

export const unFollowThunkCreator = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingProgressAC(true, userId))
    usersAPI.unfollow(userId).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(unFollowSuccessAC(userId))
        }
        dispatch(toggleIsFetchingProgressAC(false, userId))
    });
}


