import React from 'react';
import {
    sendMessageAC,
    updateNewMessageBodyAC
} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../storeContext";

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    debugger
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageAC())
                    }

                    let onNewMessageChange = (body: string) => {
                        store.dispatch(updateNewMessageBodyAC(body))
                    }
                    return <Dialogs updateNewMessageBody={onNewMessageChange}
                                    sendMessage={onSendMessageClick}
                                    dialogsPage={store.getState().dialogsPage}/>
                }
            }
        </StoreContext.Consumer>
    )


};
