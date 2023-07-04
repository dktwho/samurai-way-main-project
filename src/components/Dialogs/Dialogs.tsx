import React from 'react';
import styled from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={styled.dialogs}>
            <div className={styled.dialogsItem}>
                <div className={`${styled.dialog} ${styled.active}`}>
                    <NavLink to='/dialogs/1'>Bob</NavLink>
                </div>

                <div className={styled.dialog}>
                    <NavLink to='/dialogs/2'>Bill</NavLink>
                </div>

                <div className={styled.dialog}>
                    <NavLink to='/dialogs/3'>Tedd</NavLink>
                </div>

                <div className={styled.dialog}>
                    <NavLink to='/dialogs/3'>Sam</NavLink>
                </div>

            </div>

            <div className={styled.messages}>
                <div className={styled.message}>Hi</div>
                <div className={styled.message}>Hello</div>
                <div className={styled.message}>How are you</div>
            </div>
        </div>
    );
};
