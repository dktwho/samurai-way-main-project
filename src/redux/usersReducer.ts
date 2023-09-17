import {ActionsTypes} from "./store";

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
    currentPage: number
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1
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
            return {...state, users: [...action.users,...state.users]}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        default : {
            return state
        }
    }


}






