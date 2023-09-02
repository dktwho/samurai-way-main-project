import React from "react";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import "./App.css";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {AppStateType} from "./redux/store";
const App = (props: AppStateType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs store={props.store}
                           />}

                    />
                    <Route
                        path='/profile'
                        render={() => <Profile
                            postsData={props.appState.profilePage.posts}
                            dispatch={props.dispatch}
                            newPostText={props.appState.profilePage.newPostText}
                        />}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
