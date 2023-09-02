import {ActionsTypes, MessagePageType} from "./store";

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Fine'},
        {id: 5, message: 'Good'},
    ],
    dialogs: [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Bill'},
        {id: 3, name: 'Sam'},
        {id: 4, name: 'Tedd'},
        {id: 5, name: 'John'},
    ],
    newMessageBody: '',
}
export const dialogsReducer = (state: MessagePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            state.newMessageBody = action.body
            return state
        }

        case 'SEND-MESSAGE': {
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: new Date().getTime(), message: body})
            return state
        }

        default : {
            return state
        }
    }

}
