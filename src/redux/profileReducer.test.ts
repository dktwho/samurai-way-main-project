import {addPostAC} from "./store";
import {profileReducer} from "./profileReducer";


it('new post should be added', () => {
    let action = addPostAC('new new post added')
    let state = {
        posts: [
            {id: 1, message: 'Post 1', likesCount: '13'},
            {id: 2, message: 'Post 2', likesCount: '22'},
            {id: 3, message: 'Post 3', likesCount: '63'},
            {id: 4, message: 'Post 4', likesCount: '45'},
            {id: 5, message: 'Post 5', likesCount: '95'},
        ],
        newPostText: '',
        profile: null,
        status: 'status from store'
    }

    let newState = profileReducer(state, action)
    expect( newState.posts.length ).toBe(6)

})