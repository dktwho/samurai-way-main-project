import {getAuthUserDataThunkCreator} from "./authReducer";

// redux/ducks type
const SET_INITIALIZED_SUCCESS_APP = 'app/SET-INITIALIZED-SUCCESS-APP'
const SET_GLOBAL_ERROR = 'app/SET-GLOBAL-ERROR'


// type state
type AppDataType = {
    initialized: boolean,
    globalError: null | string
}

let initialState = {
    initialized: false,
    globalError: null
}

// types action
type AppAllActions = SetInitializedACType | SetGlobalErrorACType

export type SetInitializedACType = ReturnType<typeof setInitializedSuccessAC>
export const setInitializedSuccessAC = () => {
    return {type: SET_INITIALIZED_SUCCESS_APP}  as const
}

export type SetGlobalErrorACType = ReturnType<typeof setGlobalErrorAC>
export const setGlobalErrorAC = (globalError: string | null) => {
    return {type: SET_GLOBAL_ERROR, globalError } as const
}

export const appReducer = (state: AppDataType = initialState, action: AppAllActions):AppDataType  => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS_APP: {
            return {...state, initialized: true}
        }

        case SET_GLOBAL_ERROR: {
            return {...state, globalError: action.globalError}
        }
        default : {
            return state
        }
    }
}

// thunk
export const initializeAppThunkCreator = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserDataThunkCreator())
    promise.then(() => {
        dispatch(setInitializedSuccessAC())
    })
}

export const setErrorThunkCreator = (globalError: string | null) => (dispatch: any) => {
    dispatch(setGlobalErrorAC(globalError))
}


