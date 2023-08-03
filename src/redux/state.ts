import {rerenderEntireTree} from "../render";

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

export let state: RootStateType = {
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
}

export const addPost = () => {
    const newPost: MyPostsType = {id: new Date().getTime(), message: state.profilePage.newPostText, likesCount: '0'}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText= ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}