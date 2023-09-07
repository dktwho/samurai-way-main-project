import {ActionsTypes} from "./store";


export type UserType = {
    id: number,
    fullName: string,
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

const initialState:InitialStateType  = {
    users: [],

}
export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes):InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(user => user.id === action.userId ? {...user, followed: true } : user)}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(user => user.id === action.userId ? {...user, followed: false } : user)}
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }
        default : {
            return state
        }
    }


}



// {id: 1, fullName: 'Bill B', status: 'hello ', followed: false, location: {city: 'Los-Angeles', state: 'California'}},
// {id: 2, fullName: 'Sam W', status: 'hmmm!', followed: true, location: {city: 'New York', state: 'New York'}},
// {id: 3, fullName: 'Tedd L.', status: 'show me...', followed: false, location: {city: 'New Orleans', state: 'Louisiana'}},
// {id: 4, fullName: 'Bob R.', status: 'U-S-A', followed: true, location: {city: 'Richmond', state: 'Virginia'}},
// {id: 5, fullName: 'Tucker K.', status: 'i love Democratic Party,', followed: true, location: {city: 'Houston', state: 'Texas'}},