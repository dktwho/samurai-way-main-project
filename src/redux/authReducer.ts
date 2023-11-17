import {Dispatch} from "redux";
import {authAPI, ResultCodeEnum, ResultCodeForCaptcha, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

//  redux/ducks type
const SET_USER_DATA = 'auth/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET-CAPTCHA-URL-SUCCESS'

// type
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
export const authReducer = (state: DataType = initialState, action: AuthReducerTypeActions): DataType => {
    switch (action.type) {
        case  SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        case  GET_CAPTCHA_URL_SUCCESS: {
            return {...state, ...action.payload}
        }
        default : {
            return state
        }
    }
}

// action with types
type AuthReducerTypeActions = SetUserDataACType

export type SetUserDataACType = ReturnType<typeof setUserDataAC>
export const setUserDataAC = ({id, email, login, isAuth}: DataType) => {
    return {type: SET_USER_DATA, payload: {id, email, login, isAuth} as const}
}

export const getCaptchaUrlAC = (captchaUrl: DataType) => {
    return {type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} as const}
}

// thunk
export const getAuthUserDataThunkCreator = () => async (dispatch: Dispatch<SetUserDataACType>) => {
    const res = await authAPI.authMe()
    if (res.resultCode === ResultCodeEnum.Success) {
        let {id, email, login} = res.data
        dispatch(setUserDataAC({id, email, login, isAuth: true}))
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string | null) => async (dispatch: any) => {
    const res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === ResultCodeEnum.Success) {
        // success get auth data
        dispatch(getAuthUserDataThunkCreator())
    } else {
        if (res.data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrlThunkCreator())
        }
        let messages = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: messages}))
    }
}

export const logOutThunkCreator = () => async (dispatch: Dispatch<SetUserDataACType>) => {
    const res = await authAPI.logOut()
    if (res.data.resultCode === ResultCodeEnum.Success) {
        dispatch(setUserDataAC({id: 0, email: '', login: '', isAuth: false}))
    }
}

export const getCaptchaUrlThunkCreator = () => async (dispatch: Dispatch) => {
    const res = await securityAPI.getCaptchaUrl()
    const captchaUrl = res.data.url
    dispatch(getCaptchaUrlAC(captchaUrl))
}