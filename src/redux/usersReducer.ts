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
        {
            id: 1,
            fullName: 'Bill B',
            photoUrl: 'https://icon-library.com/images/bart-simpson-icon/bart-simpson-icon-5.jpg',
            status: 'hello ',
            followed: false,
            location: {city: 'Los-Angeles', state: 'California'}
        },
        {
            id: 2,
            fullName: 'Sam W',
            photoUrl: 'https://icon-library.com/images/bart-simpson-icon/bart-simpson-icon-5.jpg',
            status: 'hmmm!',
            followed: true,
            location: {city: 'New York', state: 'New York'}
        },
        {
            id: 3,
            fullName: 'Tedd L.',
            photoUrl: 'https://icon-library.com/images/bart-simpson-icon/bart-simpson-icon-5.jpg',
            status: 'show me...',
            followed: false,
            location: {city: 'New Orleans', state: 'Louisiana'}
        },
        {
            id: 4,
            fullName: 'Bob R.',
            photoUrl: 'https://icon-library.com/images/bart-simpson-icon/bart-simpson-icon-5.jpg',
            status: 'U-S-A',
            followed: true,
            location: {city: 'Richmond', state: 'Virginia'}
        },
        {
            id: 5,
            fullName: 'Tucker K.',
            photoUrl: 'https://icon-library.com/images/bart-simpson-icon/bart-simpson-icon-5.jpg',
            status: 'i love Democratic Party,',
            followed: true,
            location: {city: 'Houston', state: 'Texas'}
        },
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



