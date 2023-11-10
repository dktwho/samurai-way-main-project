import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./appReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})
const compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = compose || compose;

export type RootReducerType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// export let _store = createStore(rootReducer, applyMiddleware(thunk))
