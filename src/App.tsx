import React from "react";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import "./App.css";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";



const App = () => {

    const postsData  = [
        {id: 1, message: 'Post 1', likesCount: '13'},
        {id: 2, message: 'Post 2', likesCount: '22'},
        {id: 3, message: 'Post 3', likesCount: '63'},
        {id: 4, message: 'Post 4', likesCount: '45'},
        {id: 5, message: 'Post 5', likesCount: '95'},
    ]

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route  path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route  path='/profile' component={Profile}/>*/}

                    <Route  path='/dialogs' render={() => <Dialogs/>}/>
                    <Route  path='/profile' render={() => <Profile posts={postsData}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
