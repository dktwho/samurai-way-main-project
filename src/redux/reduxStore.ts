import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer, applyMiddleware(thunk))
