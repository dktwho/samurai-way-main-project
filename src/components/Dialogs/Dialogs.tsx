import React, {ChangeEvent} from 'react';
import styled from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {
    ActionsTypes,
    DialogItemType,
    MessageType,
    sendMessageAC,
    updateNewMessageBodyAC
} from "../../redux/store";

type GlobalMessageType = {
    store: MessagePageType2
    dispatch: (action: ActionsTypes) => void

}
export type MessagePageType2 = {
    messages: MessageType[]
    dialogs: DialogItemType[]
    newMessageBody: string

}

export const Dialogs = (props: GlobalMessageType) => {
     let state = props.store

    let resultDialogsData = state.dialogs.map(elem => {
        return (
            <DialogItem key={elem.id} name={elem.name} id={elem.id}/>
        )
    })

    let resultMessagesData = state.messages.map(elem => {
        return (
            <Message key={elem.id} message={elem.message} id={elem.id}/>
        )
    })

    let newMessageBody = state.newMessageBody
    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())

    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyAC(body))

    }

    return (
        <div className={styled.dialogs}>
            <div className={styled.dialogsItem}>
                {resultDialogsData}
            </div>
            <div className={styled.messages}>
                <div>{resultMessagesData}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                                   placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
