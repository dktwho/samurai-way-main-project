import React from 'react';
import styled from './Dialogs.module.css'
import {DialogItem, DialogItemType} from "./DialogItem/DialogsItem";
import {Message, MessageType} from "./Message/Message";

export type DialogsAndMessagesType = {
    dialogsData: DialogItemType[]
    messagesData: MessageType[]
}

export const Dialogs = (props: DialogsAndMessagesType ) => {

    let resultDialogsData = props.dialogsData.map(elem => {
        return (
            <DialogItem key={elem.id} name={elem.name} id={elem.id}/>
        )
    })

    let resultMessagesData = props.messagesData.map(elem => {
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
