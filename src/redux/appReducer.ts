import {getAuthUserDataThunkCreator} from "./authReducer";

type AppDataType = {
    initialized: boolean,
    globalError: null | string
}

let initialState = {
    initialized: false,
    globalError: null
}


export type SetInitializedACType = ReturnType<typeof setInitializedSuccessAC>
export const setInitializedSuccessAC = () => {
    return {type: 'SET-INITIALIZED-SUCCESS-APP' as const}
}

export const appReducer = (state: AppDataType = initialState, action: SetInitializedACType) => {
    switch (action.type) {
        case 'SET-INITIALIZED-SUCCESS-APP': {
            return {...state, initialized: true}
        }
        default : {
            return state
        }
    }
}


export const initializeAppThunkCreator = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserDataThunkCreator())
    promise.then(() => {
        dispatch(setInitializedSuccessAC())
    })
}
