import {rerenderEntireTree} from "../render";


export type DialogsAndMessagesType = {
    dialogsData: DialogItemType[]
    messagesData: MessageType[]
}

export type DialogItemType = {
    name: string;
    id: number;
}

export type MessageType = {
    message: string
    id: number
}

export type MyPostsType = {
    id: number
    message: string
    likesCount: string
}

export type PostsTypeProps = {
    postsData: MyPostsType[]
    addPost: (post: string) => void
}

export type  MessagePropTypes = {
    message: string;
    likesCount: string;
}

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Post 1', likesCount: '13'},
            {id: 2, message: 'Post 2', likesCount: '22'},
            {id: 3, message: 'Post 3', likesCount: '63'},
            {id: 4, message: 'Post 4', likesCount: '45'},
            {id: 5, message: 'Post 5', likesCount: '95'},
        ]
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

export const addPost = (postMessage: string) => {
    const newPost: MyPostsType = {id: new Date().getTime(), message: postMessage, likesCount: '0'}
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}