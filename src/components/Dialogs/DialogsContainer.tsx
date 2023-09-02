import React from 'react';
import {
    sendMessageAC, StoreType,
    updateNewMessageBodyAC
} from "../../redux/store";
import {Dialogs} from "./Dialogs";


type DialogsContainerType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsContainerType) => {
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                 dialogsPage={props.store.getState().dialogsPage}/>
    );
};
