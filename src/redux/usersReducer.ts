import {ActionsTypes} from "./store";

export type UserType = {
    id: number,
    fullName: string,
    photoUrl: string,
    status: string,
    followed: boolean,
    location: LocationType
}

export type LocationType = {
    city: string
    state: string
}

export type InitialStateType = {
    users: UserType[]
}

const initialState: InitialStateType = {
    users: [

    ],

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
            return {...state, users: [...state.users, ...action.users]}
        }
        default : {
            return state
        }
    }


}






