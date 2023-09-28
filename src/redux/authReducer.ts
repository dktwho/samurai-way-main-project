import {MyPostsType} from "./store";


let initialState = {
    userId: null,
    email: null,
    login: null
}
export const authReducer = (state: any = initialState, action: AuthReducerTypeActions) => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.data}
        }
        default : {
            return state
        }
    }
}

type AuthReducerTypeActions = SetUserDataACType
type SetUserDataACType = ReturnType<typeof setUserDataAC>
const setUserDataAC = ({userId, email, login}: DataType) => {
    return {type: 'SET-USER-DATA', data: {userId, email, login}} as const
}

// type a = {
//     resultCode: number
//     messages: MyPostsType[],
//     data: {
//         userId: number,
//         email: string,
//         login: string
//     }
// }

type DataType = {
    userId: number,
    email: string,
    login: string
}