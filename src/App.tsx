import React from "react";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import "./App.css";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {AppStateType, store} from "./redux/state";


const App = (props: AppStateType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs messagesData={props.appState.dialogsPage.messages}
                                                  dialogsData={props.appState.dialogsPage.dialogs}
                                                  newMessageBody={props.appState.dialogsPage.newMessageBody}
                                                  dispatch={props.dispatch}
                           />}

                    />
                    <Route path='/profile' render={() => <Profile
                        // addPost={props.addPost}
                        postsData={props.appState.profilePage.posts}
                        dispatch={props.dispatch}
                        newPostText={props.appState.profilePage.newPostText}
                        // updateNewPostText={props.updateNewPostText}

                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
