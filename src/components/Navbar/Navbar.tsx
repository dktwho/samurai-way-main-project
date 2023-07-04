import React from "react";
import styled from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styled.nav}>
            <div className={`${styled.item} ${styled.active}`}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={styled.item}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={styled.item}>
                <a>News</a>
            </div>
            <div className={styled.item}>
                <a>Music</a>
            </div>
            <div className={styled.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
};
