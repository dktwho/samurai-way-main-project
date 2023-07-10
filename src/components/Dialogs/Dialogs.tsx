import React from 'react';
import styled from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    name: string;
    id: number;
}


const DialogItem: React.FC<DialogItemType> = ({name, id}) => {
    let path = `/dialogs/${id}`
    return (
        <div className={`${styled.dialog} ${styled.active}`}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}


export type MessageType = {
    message: string
    id: number
}
const Message: React.FC<MessageType> = ({message}) => {
    return (
        <div className={styled.message}>{message}</div>
    )
}

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Bill'},
        {id: 3, name: 'Sam'},
        {id: 4, name: 'Tedd'},
        {id: 5, name: 'John'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Fine'},
        {id: 4, message: 'Good'},
    ]

    return (
        <div className={styled.dialogs}>
            <div className={styled.dialogsItem}>
                {dialogsData.map(elem => {
                    return (
                        <DialogItem key={elem.id} name={elem.name} id={elem.id}/>
                    )
                })}

            </div>

            <div className={styled.messages}>
                {messagesData.map(elem => {
                    return (
                        <Message key={elem.id} message={elem.message} id={elem.id}/>
                    )
                })}

            </div>
        </div>
    );
};
