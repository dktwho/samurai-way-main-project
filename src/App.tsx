import React from "react";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import "./App.css";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogItemType, MessageType, MyPostsType} from "./redux/state";



export type AppStateType = {
    appState: {
        profilePage: ProfilePageType
        dialogsPage: MessagePageType
    },
    addPost: (postMessage: string) => void
}

export type ProfilePageType = {
    posts: MyPostsType[]

}

export type MessagePageType = {
    messages: MessageType[]
    dialogs: DialogItemType[]
}

const App = (props: AppStateType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs messagesData={props.appState.dialogsPage.messages}
                                                  dialogsData={props.appState.dialogsPage.dialogs}/>}/>
                    <Route path='/profile' render={() => <Profile addPost={props.addPost}  postsData={props.appState.profilePage.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
