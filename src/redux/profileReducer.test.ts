import {ProfilePageType} from "./store";
import {addPostAC, profileReducer, savePhotoAC, setUserProfileAC, setUserStatusAC} from "./profileReducer";


describe('profileReducer', () => {
    let initialState: ProfilePageType;

    beforeEach(() => {
        initialState = initialState = {
            posts: [
                {id: 1, message: 'Post 1', likesCount: '13'},
                {id: 2, message: 'Post 2', likesCount: '22'},
                {id: 3, message: 'Post 3', likesCount: '63'},
                {id: 4, message: 'Post 4', likesCount: '45'},
                {id: 5, message: 'Post 5', likesCount: '95'},
            ],
            newPostText: '',
            profile: {
                aboutMe: 'about me default text',
                contacts: {
                    facebook: 'string facebook ',
                    website: 'any website string',
                    vk: 'string vk',
                    twitter: 'string twitter',
                    instagram: 'string instagram',
                    youtube: 'any youtube',
                    github: 'string github',
                    mainLink: 'any mainLink',
                },
                lookingForAJob: false,
                lookingForAJobDescription: 'string lookingForAJobDescription',
                fullName: ' fullName string',
                userId: 10000,
                photos: {
                    small: 'string small photo',
                    large: 'string large photo',
                }
            },
            status: 'status from global state redux',

        }
        test('should add a new post', () => {


            const newPostText = 'Hello, world!';
            const action = addPostAC(newPostText);

            const newState = profileReducer(initialState, action);

            expect(newState.posts.length).toBe(1);
            expect(newState.posts[0].message).toBe(newPostText);
        });

        test('should set the user profile', () => {

            const profile = {
                userId: 123,
                fullName: 'John Doe',
                aboutMe: 'Hello, I am John!',
                contacts: {},
                photos: {}
            };
            const action = setUserProfileAC(profile);
            const newState = profileReducer(initialState, action);
            expect(newState.profile).toEqual(profile);
        });

        test('should set the user status', () => {

            const status = 'Online';
            const action = setUserStatusAC(status);
            const newState = profileReducer(initialState, action);
            expect(newState.status).toBe(status);
        });

        test('should set the user photo', () => {

            const photos = {
                small: 'url/to/small/photo.jpg',
                large: 'url/to/large/photo.jpg'
            };
            const action = savePhotoAC(photos);
            const newState = profileReducer(initialState, action);
            expect(newState.profile.photos).toEqual(photos);
        });
    })
})