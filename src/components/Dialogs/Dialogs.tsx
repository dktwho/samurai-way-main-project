import React  from 'react';
import styled from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogItemType, MessageType} from "../../redux/store";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


type MessagePageType2 = {
    messages: MessageType[]
    dialogs: DialogItemType[]
    newMessageBody: string
}
type GlobalMessageType2 = {
    dialogsPage: MessagePageType2
    updateNewMessageBody: (value: string) => void
    sendMessage: (newMessageBody: string) => void
}

export const Dialogs = (props: GlobalMessageType2) => {
    const {dialogsPage} = props
    const {dialogs,messages} = dialogsPage

    let resultDialogsData = dialogs.map(elem => {
        return (
            <DialogItem key={elem.id} name={elem.name} id={elem.id}/>
        )
    })

    let resultMessagesData = messages.map(elem => {
        return (
            <Message key={elem.id} message={elem.message} id={elem.id}/>
        )
    })

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }


    return (
        <div className={styled.dialogs}>
            <div className={styled.dialogsItem}>
                {resultDialogsData}
            </div>
            <div className={styled.messages}>
                <div>{resultMessagesData}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       validate={[required, maxLength50]}
                       name={'newMessageBody'}
                       placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)