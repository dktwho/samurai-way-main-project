import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {UserType} from "./usersReducer";

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

export type ProfilePageType = {
    posts: MyPostsType[]
    newPostText: string
    profile: null
    status: string
}

export type MessagePageType = {
    messages: MessageType[]
    dialogs: DialogItemType[]

}

export type ActionsTypes =
    AddPostActionType
    | ChangeNewTextActionType
    | UpdateNewMessageBodyACType
    | SendMessageACType
    | UnFollowACType
    | FollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | setTotalCountACType
    | ToggleIsFetchingACType
    | SetUserProfileActionType
    | ToggleIsFetchingProgressACType
    | SetUserStatusActionType

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagePageType

}

export type  MessagePropTypes = {
    message: string;
    likesCount: string;
}

export type AddPostActionType = ReturnType<typeof addPostAC>

export const addPostAC = () => {
    return {
        type: 'ADD-POST',
    } as const
}

export type SetUserProfileActionType = ReturnType<typeof setUserProfileAC>

export const setUserProfileAC = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

export type SetUserStatusActionType = ReturnType<typeof setUserStatusAC>
export const setUserStatusAC = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}


export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>
export const changeNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText
    } as const
}

export type UpdateNewMessageBodyACType = ReturnType<typeof updateNewMessageBodyAC>

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body
    } as const
}

export type SendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: 'SEND-MESSAGE',
        newMessageBody
    } as const
}

export type FollowACType = ReturnType<typeof followSuccessAC>
export const followSuccessAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}


export type UnFollowACType = ReturnType<typeof unFollowSuccessAC>
export const unFollowSuccessAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

export type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}

export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}


export type setTotalCountACType = ReturnType<typeof setTotalCountAC>
export const setTotalCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        totalUsersCount
    } as const
}

export type ToggleIsFetchingProgressACType = ReturnType<typeof toggleIsFetchingProgressAC>
export const toggleIsFetchingProgressAC = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFetching,
        userId
    } as const
}


export type StoreType = {
    _state: RootStateType,
    updateNewPostText: (newText: string) => void,
    addPost: (postText: string) => void
    _rerenderEntireTree: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
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
            profile: null,
            status: 'status from store'
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
            ],
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree()

    }
}




