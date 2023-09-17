import React from 'react';
// import {Users} from "./Users";
import {Users} from "./UsersClass";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/reduxStore";
import {followAC, setUsersAC, unFollowAC} from "../../redux/store";
import {InitialStateType, UserType} from "../../redux/usersReducer";
import {Dispatch} from "redux";

export type MapStatePropsType = {
    usersPage: InitialStateType
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType
let mapStateToProps = (state: RootReducerType):MapStatePropsType => {
    return {
        usersPage: state.usersPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Users)