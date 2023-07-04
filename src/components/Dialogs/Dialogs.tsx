import React from 'react';
import styled from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    name: string;
    id: number;

}
const DialogItem = ({name, id}: DialogItemType) => {
    let path = `/dialogs/${id}`
    return (
        <div className={`${styled.dialog} ${styled.active}`}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}


export type MessageType = {
    message: string
}
const Message = ({message}: MessageType) => {
    return (
        <div className={styled.message}>{message}</div>
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
                <Message message={'Hi'}/>
                <Message message={'Hello'}/>
                <Message message={'How are you?'}/>
            </div>
        </div>
    );
};
