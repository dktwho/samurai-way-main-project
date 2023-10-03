import React from 'react';
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/reduxStore";
import {
    followAC,
    setUsersAC,
    unFollowAC,
    setCurrentPageAC,
    setTotalCountAC,
    toggleIsFetchingAC, toggleIsFetchingProgressAC,
} from "../../redux/store";
import {InitialStateType, UserType} from "../../redux/usersReducer";
import {Users2} from "./Users2";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type PropsType = MapStatePropsType & MapDispatchToPropsType


export const getUsersThunkCreator = (currentPage: number,pageSize:number) => (dispatch: any) => {
    dispatch(toggleIsFetchingAC(true))
    usersAPI.getUsers(currentPage,pageSize).then((data) => {
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setTotalCountAC(data.totalCount))
    })
}


class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users2 onPageChanged={this.onPageChanged}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        usersPage={this.props.usersPage}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        toggleIsFetchingProgress={this.props.toggleIsFetchingProgress}
                        followingInProgress={this.props.followingInProgress}
                />
            </>

        )
    }
}

export type MapStatePropsType = {
    usersPage: InitialStateType,
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFetchingProgress: (isFetching: boolean, userId: number) => void
    getUsersThunk: (currentPage: number,pageSize:number) => void

}

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType
let mapStateToProps = (state: RootReducerType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}



export default connect(mapStateToProps, {
    follow: followAC,
    unfollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    toggleIsFetchingProgress: toggleIsFetchingProgressAC,
    getUsersThunk: getUsersThunkCreator
})(UsersContainer)