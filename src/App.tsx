import React from "react";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import "./App.css";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {PostsTypeProps} from "./components/Profile/MyPosts/MyPosts";



const App = (props: PostsTypeProps) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route  path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route  path='/profile' component={Profile}/>*/}

                    <Route  path='/dialogs' render={() => <Dialogs/>}/>
                    <Route  path='/profile' render={() => <Profile posts={props.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
