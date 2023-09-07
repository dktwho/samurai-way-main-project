import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/reduxStore";
import {followAC, setUsersAC, unFollowAC} from "../../redux/store";
import {InitialStateType} from "../../redux/usersReducer";

type MapStatePropsType = {
    usersPage: InitialStateType
}
let mapStateToProps = (state: RootReducerType) => {
    return {
        usersPage: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Users)