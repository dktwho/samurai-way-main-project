import {Dispatch} from "redux";
import {authAPI} from "../api/api";

type DataType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean,
}

let initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}
export const authReducer = (state: DataType = initialState, action: AuthReducerTypeActions) => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.payload, isAuth: true}
        }
        default : {
            return state
        }
    }
}

type AuthReducerTypeActions = SetUserDataACType
export type SetUserDataACType = ReturnType<typeof setUserDataAC>
export const setUserDataAC = ({id, email, login, isAuth}: DataType) => {
    return {type: 'SET-USER-DATA', payload: {id, email, login, isAuth} as const}
}

export const getAuthUserDataThunkCreator = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then((res) => {
            if (res.data.resultCode === 0) {
                let {login, email, id, isAuth} = res.data.data
                dispatch(setUserDataAC({login, email, id, isAuth}))
            }
        })
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserDataThunkCreator())
            }
        })
}

export const logOutThunkCreator = () => (dispatch: any) => {
    authAPI.logOut()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserDataAC({id: 0, email: '', login: '', isAuth: false}))
            }
        })
}