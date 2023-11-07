import {setUserDataAC, authReducer} from "./authReducer";

describe('authReducer', () => {
    it('should update user data in the state', () => {
        // Arrange
        const initialState = {
            id: 0,
            email: '',
            login: '',
            isAuth: false
        };
        const userData = {
            id: 1,
            email: 'test@example.com',
            login: 'testuser',
            isAuth: true
        };

        const action = setUserDataAC(userData);

        // Act
        const newState = authReducer(initialState, action);

        // Assert
        expect(newState).toEqual(userData);
    });
});