import {ActionsTypes} from "./state";

export const dialogsReducer = (state: any, action: ActionsTypes) => {
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
