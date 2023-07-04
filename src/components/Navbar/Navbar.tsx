import React from "react";
import {NavLink} from "react-router-dom";
import styled from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styled.nav}>
            <div className={`${styled.item} ${styled.active}`}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={styled.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={styled.item}>
                <NavLink to=''>News</NavLink>
            </div>
            <div className={styled.item}>
                <NavLink to=''>Music</NavLink>
            </div>
            <div className={styled.item}>
                <NavLink to=''>Settings</NavLink>
            </div>
        </nav>
    );
};
