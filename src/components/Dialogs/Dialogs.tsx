import React from 'react';
import styled from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Bill'},
        {id: 3, name: 'Sam'},
        {id: 4, name: 'Tedd'},
        {id: 5, name: 'John'},
    ]

    let resultDialogsData = dialogsData.map(elem => {
        return (
            <DialogItem key={elem.id} name={elem.name} id={elem.id}/>
        )
    })

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Fine'},
        {id: 4, message: 'Good'},
    ]

    let resultMessagesData = messagesData.map(elem => {
        return (
            <Message key={elem.id} message={elem.message} id={elem.id}/>
        )
    })

    return (
        <div className={styled.dialogs}>
            <div className={styled.dialogsItem}>
                {resultDialogsData}
            </div>
            <div className={styled.messages}>
                {resultMessagesData}
            </div>
        </div>
    );
};
