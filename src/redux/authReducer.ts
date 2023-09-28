import {MyPostsType} from "./store";


let initialState = {
    userId: null,
    email: null,
    login: null
}
export const authReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.data}
        }
        default : {
            return state
        }
    }
}

const setUserData = (data: DataType) => {
    return {type: 'SET-USER-DATA', data} as const
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