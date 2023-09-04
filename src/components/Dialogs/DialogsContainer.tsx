import React from 'react';
import {
    sendMessageAC,
    updateNewMessageBodyAC
} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../storeContext";
import {connect} from "react-redux";

// export const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     debugger
//                     let onSendMessageClick = () => {
//                         store.dispatch(sendMessageAC())
//                     }
//
//                     let onNewMessageChange = (body: string) => {
//                         store.dispatch(updateNewMessageBodyAC(body))
//                     }
//                     return <Dialogs updateNewMessageBody={onNewMessageChange}
//                                     sendMessage={onSendMessageClick}
//                                     dialogsPage={store.getState().dialogsPage}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// };

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: string)=> {dispatch(updateNewMessageBodyAC(body))},
        sendMessage: () => {dispatch(sendMessageAC())}
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
