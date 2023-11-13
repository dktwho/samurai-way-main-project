import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET-CAPTCHA-URL-SUCCESS'

type DataType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean,
    captchaUrl?: null // if null , then captcha is not required
}

let initialState: DataType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
    captchaUrl: null
}
export const authReducer = (state: DataType = initialState, action: AuthReducerTypeActions) => {
    switch (action.type) {
        case  SET_USER_DATA: {
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
    return {type: SET_USER_DATA, payload: {id, email, login, isAuth} as const}
}

export const getCaptchaUrlAC = (captchaUrl: DataType) => {
    return {type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} as const}
}

export const getAuthUserDataThunkCreator = () => async (dispatch: Dispatch) => {
    const res = await authAPI.authMe()
    if (res.data.resultCode === 0) {
        let {id, email, login} = res.data.data
        dispatch(setUserDataAC({id, email, login, isAuth: true}))
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    const res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        // success get auth data
        dispatch(getAuthUserDataThunkCreator())
    } else {
        if(res.data.resultCode === 10) {
            dispatch(getCaptchaUrlThunkCreator())
        }
        let messages = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: messages}))
    }
}


export const logOutThunkCreator = () => async (dispatch: any) => {
    const res = await authAPI.logOut()
    if (res.data.resultCode === 0) {
        dispatch(setUserDataAC({id: 0, email: '', login: '', isAuth: false}))
    }
}


export const getCaptchaUrlThunkCreator = () => async (dispatch: any) => {
    const res = await securityAPI.getCaptchaUrl()
    const captchaUrl = res.data.url
    dispatch(getCaptchaUrlAC(captchaUrl))


}