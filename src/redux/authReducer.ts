import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
            return {...state, ...action.payload}
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
                let {id, email, login} = res.data.data
                dispatch(setUserDataAC({id, email, login, isAuth: true}))
            }
        })
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserDataThunkCreator())
            } else {
                let messages = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: messages}))
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