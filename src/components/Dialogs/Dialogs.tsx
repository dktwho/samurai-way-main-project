import React from 'react';
import styled from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    name: string;
    id: number;

}
const DialogItem = ({name, id}: DialogItemType) => {
    return (
        <div className={`${styled.dialog} ${styled.active}`}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}

export const Dialogs = () => {
    return (
        <div className={styled.dialogs}>
            <div className={styled.dialogsItem}>
                <DialogItem name={'Bob'} id={1}/>
                <DialogItem name={'Bill'} id={2}/>
                <DialogItem name={'Sam'} id={3}/>
                <DialogItem name={'Tedd'} id={4}/>
                <DialogItem name={'John'} id={5}/>
            </div>

            <div className={styled.messages}>
                <div className={styled.message}>Hi</div>
                <div className={styled.message}>Hello</div>
                <div className={styled.message}>How are you</div>
            </div>
        </div>
    );
};
