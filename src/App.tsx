import React from "react";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import "./App.css";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {MyPostsType} from "./components/Profile/MyPosts/MyPosts";
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogsItem";
import {MessageType} from "./components/Dialogs/Message/Message";


type AppStateType = {
    appState: {
        posts: MyPostsType[]
        messages: MessageType[]
        dialogs: DialogItemType[]
    }
}

const App = (props: AppStateType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs messagesData={props.appState.messages}
                                                  dialogsData={props.appState.dialogs}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.appState.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
