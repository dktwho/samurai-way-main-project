import React from "react";
import {Navbar} from "./components/Navbar/Navbar";
import "./App.css";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/LoginForm";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppThunkCreator} from "./redux/appReducer";


type MapStateToPropsType = {}
type MapDispatchToPropsType = {
    initializeAppThunkCreator: () => void
}

class App extends React.Component<MapStateToPropsType & MapDispatchToPropsType, unknown> {
    componentDidMount() {
        this.props.initializeAppThunkCreator()
    }

    render() {
        return (
            // <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route
                        path='/profile/:userId?'
                        render={() => <ProfileContainer/>}/>

                    <Route
                        path='/users'
                        render={() => <UsersContainer/>}/>

                    <Route
                        path='/login'
                        render={() => <Login/>}/>
                </div>
            </div>
            // </BrowserRouter>
        );
    }
}

// export default App;
export default compose(
    withRouter,
    connect(null, {initializeAppThunkCreator}))(App)