import {getAuthUserDataThunkCreator} from "./authReducer";

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
    return {type: 'SET-INITIALIZED-SUCCESS-APP'}  as const
}

export type SetGlobalErrorACType = ReturnType<typeof setGlobalErrorAC>
export const setGlobalErrorAC = (globalError: string | null) => {
    return {type: 'SET-GLOBAL-ERROR', globalError } as const
}

export const appReducer = (state: AppDataType = initialState, action: AppAllActions):AppDataType  => {
    switch (action.type) {
        case 'SET-INITIALIZED-SUCCESS-APP': {
            return {...state, initialized: true}
        }

        case 'SET-GLOBAL-ERROR': {
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


