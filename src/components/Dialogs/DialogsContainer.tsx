import React from 'react';
import {
    sendMessageAC,
    updateNewMessageBodyAC
} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state: RootReducerType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))
