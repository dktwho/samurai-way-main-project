import React from "react";
import {Navbar} from "./components/Navbar/Navbar";
import "./App.css";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/LoginForm";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppThunkCreator, setErrorThunkCreator} from "./redux/appReducer";
import {RootReducerType, store} from "./redux/reduxStore";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import {Provider} from "react-redux";


const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"))


class App extends React.Component<MapStateToPropsType & MapDispatchToPropsType, unknown> {

    catchAllUnhandledError = (promiseRejectionEvent: any) => {
        console.error(promiseRejectionEvent)
        this.props.setErrorThunkCreator('error promise')
    }

    componentDidMount() {
        this.props.initializeAppThunkCreator()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledError)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledError)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to={'/profile'}/>}/>

                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>

                        <Route
                            path='/profile/:userId?'
                            render={withSuspense(ProfileContainer)}/>

                        <Route
                            path='/users'
                            render={() => <UsersContainer/>}/>

                        <Route
                            path='/login'
                            render={() => <Login/>}/>

                        <Route
                            path='*'
                            render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>

                </div>
            </div>
        );
    }
}


type MapStateToPropsType = {
    initialized: boolean
    globalError: string | null
}
type MapDispatchToPropsType = {
    initializeAppThunkCreator: () => void
    setErrorThunkCreator: (error: string | null) => void
}

let mapStateToProps = (state: RootReducerType) => ({
    initialized: state.app.initialized,
    globalError: state.app.globalError
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppThunkCreator, setErrorThunkCreator}))(App)

export const SamuraiTSApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}