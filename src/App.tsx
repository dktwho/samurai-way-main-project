import React from "react";
import {Navbar} from "./components/Navbar/Navbar";
import "./App.css";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/LoginForm";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppThunkCreator} from "./redux/appReducer";
import {RootReducerType, store} from "./redux/reduxStore";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import {Provider} from "react-redux";


const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"))

class App extends React.Component<MapStateToPropsType & MapDispatchToPropsType, unknown> {
    componentDidMount() {
        this.props.initializeAppThunkCreator()
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
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>

                    <Route
                        path='/profile/:userId?'
                        render={withSuspense(ProfileContainer)}
                    />

                    <Route
                        path='/users'
                        render={() => <UsersContainer/>}/>

                    <Route
                        path='/login'
                        render={() => <Login/>}/>

                    <Route
                        path='*'
                        render={() => <div>404 NOT FOUND</div>}/>
                </div>
            </div>
        );
    }
}


type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeAppThunkCreator: () => void
}

let mapStateToProps = (state: RootReducerType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppThunkCreator}))(App)

export const SamuraiTSApp = (props: any) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}