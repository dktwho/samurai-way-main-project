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
            return {...state, ...action.data, isAuth: true}
        }
        default : {
            return state
        }
    }
}

type AuthReducerTypeActions = SetUserDataACType
export type SetUserDataACType = ReturnType<typeof setUserDataAC>
export const setUserDataAC = ({id, email, login}: DataType) => {
    return {type: 'SET-USER-DATA', data: {id, email, login} as const}
}

export const getAuthUserDataThunkCreator = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserDataAC(res.data.data))
            }
        })
}