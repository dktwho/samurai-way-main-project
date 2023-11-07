import {sendMessageAC, dialogsReducer} from "./dialogsReducer";

describe('dialogsReducer', () => {
    it('should add a new message to the state', () => {
        // Arrange
        const initialState = {
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
        };
        const newMessage = 'New message';

        const action = sendMessageAC(newMessage);

        // Act
        const newState = dialogsReducer(initialState, action);

        // Assert
        expect(newState.messages.length).toBe(initialState.messages.length + 1);
        expect(newState.messages[newState.messages.length - 1].message).toBe(newMessage);
    });
});