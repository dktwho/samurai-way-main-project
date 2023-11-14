import {setInitializedSuccessAC, appReducer, setGlobalErrorAC} from './appReducer';

    describe('appReducer', () => {
        it('should handle SET_INITIALIZED_SUCCESS action type', () => {
            const initialState = {
                initialized: false,
                globalError: null,
            };

            const action = setInitializedSuccessAC();
            const nextState = appReducer(initialState, action);

            expect(nextState.initialized).toBe(true);
        });

        it('should handle SET_GLOBAL_ERROR action type', () => {
            const initialState = {
                initialized: false,
                globalError: null,
            };

            const error = 'Something went wrong.';
            const action = setGlobalErrorAC(error);
            const nextState = appReducer(initialState, action);

            expect(nextState.globalError).toBe(error);
        });

        // Add more test cases for other action types and scenarios as needed
    });