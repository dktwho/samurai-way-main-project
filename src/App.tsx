import React from "react";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
const App = (props: any) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs'*/}
                    {/*       render={() => <Dialogs store={props.store}*/}
                    {/*       />}*/}

                    {/*/>*/}

                    <Route path='/dialogs'
                           render={() => <DialogsContainer store={props.store}
                           />}

                    />


                    {/*<Route*/}
                    {/*    path='/profile'*/}
                    {/*    render={() => <Profile*/}
                    {/*        postsData={props.appState.profilePage.posts}*/}
                    {/*        dispatch={props.dispatch}*/}
                    {/*        newPostText={props.appState.profilePage.newPostText}*/}
                    {/*        addPost={props.store.addPost}*/}
                    {/*        updateNewPostText={props.store.updateNewPostText}*/}
                    {/*    />}/>*/}

                    <Route
                        path='/profile'
                        render={() => <Profile
                            store={props.store}
                        />}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
