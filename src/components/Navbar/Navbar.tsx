import React from "react";
import {NavLink} from "react-router-dom";
import styled from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styled.nav}>
            <div>
                <NavLink to='/profile' className={navData =>
                    navData ? styled.active : styled.item
                }
                >Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={navData =>
                    navData ? styled.active : styled.item
                }>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/users' className={navData =>
                    navData ? styled.active : styled.item
                }>Users</NavLink>
            </div>
            {/*<div>*/}
            {/*    <NavLink to='' className={navData =>*/}
            {/*        navData ? styled.active : styled.item*/}
            {/*    }>News</NavLink>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <NavLink to='' className={navData =>*/}
            {/*        navData ? styled.active : styled.item*/}
            {/*    }>Music</NavLink>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <NavLink to='' className={navData =>*/}
            {/*        navData ? styled.active : styled.item*/}
            {/*    }>Settings</NavLink>*/}
            {/*</div>*/}
        </nav>
    );
};
