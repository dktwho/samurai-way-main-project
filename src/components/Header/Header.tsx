import React from "react";
import styled from "./Header.module.css";
import {NavLink} from "react-router-dom";


export const Header = (props: any) => {
    return (
        <header className={styled.header}>
            <img
                src="https://seeklogo.com/images/S/snapsvg-logo-8E936C9AE9-seeklogo.com.png"
                alt="logo"
            />
            <div className={styled.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'./login'}>Login</NavLink>}
            </div>
        </header>
    );
};

