import {ActionsTypes, ProfilePageType} from "./store";
import {ADD_POST, profileReducer, SET_STATUS, SET_USER_PROFILE} from "./profileReducer";

describe('profileReducer', () => {
    // let initialState: ProfilePageType;
    //
    // beforeEach(() => {
    //     initialState = {
    //         posts: [
    //             { id: 1, message: 'Post 1', likesCount: '13' },
    //             { id: 2, message: 'Post 2', likesCount: '22' },
    //             { id: 3, message: 'Post 3', likesCount: '63' },
    //             { id: 4, message: 'Post 4', likesCount: '45' },
    //             { id: 5, message: 'Post 5', likesCount: '95' },
    //         ],
    //         newPostText: '',
    //         profile: {},
    //         status: 'status from global state redux',
    //     };
    // });
    //
    // it('should add a new post', () => {
    //     const action: ActionsTypes = {
    //         type: ADD_POST,
    //         newPostText: 'New post',
    //     };
    //
    //     const expectedState: ProfilePageType = {
    //         ...initialState,
    //         posts: [
    //             ...initialState.posts,
    //             { id: expect.any(Number), message: 'New post', likesCount: '0' },
    //         ],
    //     };
    //
    //     const newState = profileReducer(initialState, action);
    //
    //     expect(newState).toEqual(expectedState);
    //     expect(newState.posts[5].message).toBe('New post');
    // });
    //
    // it('should set user profile', () => {
    //     const profile = null;
    //     const action: ActionsTypes = {
    //         type: SET_USER_PROFILE,
    //         profile,
    //     };
    //
    //     const expectedState: ProfilePageType = {
    //         ...initialState,
    //         profile,
    //     };
    //
    //     const newState = profileReducer(initialState, action);
    //
    //     expect(newState).toEqual(expectedState);
    // });
    //
    // it('should set user status', () => {
    //     const status = 'New status';
    //     const action: ActionsTypes = {
    //         type: SET_STATUS,
    //         status,
    //     };
    //
    //     const expectedState: ProfilePageType = {
    //         ...initialState,
    //         status,
    //     };
    //
    //     const newState = profileReducer(initialState, action);
    //     expect(newState).toEqual(expectedState);
    // });
});



