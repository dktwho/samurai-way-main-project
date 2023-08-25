export type MessageType = {
    message: string
    id: number
}

export type DialogItemType = {
    name: string;
    id: number;
}

export type MyPostsType = {
    id: number
    message: string
    likesCount: string
}

export type AppStateType = {
    appState: {
        profilePage: ProfilePageType
        dialogsPage: MessagePageType
    },
    addPost: (postMessage: string) => void
    updateNewPostText: (text: string) => void
}

export type ProfilePageType = {
    posts: MyPostsType[]
    newPostText: string
}

export type MessagePageType = {
    messages: MessageType[]
    dialogs: DialogItemType[]
}

export type DialogsAndMessagesType = {
    dialogsData: DialogItemType[]
    messagesData: MessageType[]
}

export type PostsTypeProps = {
    postsData: MyPostsType[]
    addPost: (post: string) => void
    updateNewPostText: (text: string) => void
    newPostText: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagePageType
}

export type  MessagePropTypes = {
    message: string;
    likesCount: string;
}

type AddPostActionType = {
    type: 'ADD-POST',
    postText: string
}

type ChangeNewTextActionType = {
    type: 'CHANGE-NEW-TEXT',
    newText: string

}

export type StoreType = {
    _state: RootStateType,
    updateNewPostText: (newText: string) => void,
    addPost: (postText: string) => void
    _rerenderEntireTree: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void

}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Post 1', likesCount: '13'},
                {id: 2, message: 'Post 2', likesCount: '22'},
                {id: 3, message: 'Post 3', likesCount: '63'},
                {id: 4, message: 'Post 4', likesCount: '45'},
                {id: 5, message: 'Post 5', likesCount: '95'},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
            ]
        }
    },
    _rerenderEntireTree() {
        console.log('state is changed')
    },
    addPost(postText: string) {
        const newPost: MyPostsType = {id: new Date().getTime(), message: postText, likesCount: '0'}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._rerenderEntireTree()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree()
    },
    subscribe(callback) {
        this._rerenderEntireTree = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: MyPostsType = {id: new Date().getTime(), message: action.postText, likesCount: '0'}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerenderEntireTree()
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree()
        }
    }
}
