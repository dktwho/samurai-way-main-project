import React from 'react';
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/reduxStore";
import {
    followAC,
    setUsersAC,
    unFollowAC,
    setCurrentPageAC,
    setTotalCountAC,
    toggleIsFetchingAC,
} from "../../redux/store";
import {InitialStateType, UserType} from "../../redux/usersReducer";
import axios from "axios";
import {Users2} from "./Users2";
import {Preloader} from "../common/Preloader/Preloader";
import {v4} from 'uuid';

const settings = {
    withCredentials: true
}

type PropsType = MapStatePropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.currentPage}`, settings)
            .then((res) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.currentPage}`, settings)
            .then((res) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
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
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType
let mapStateToProps = (state: RootReducerType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow: followAC,
    unfollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalCountAC,
    toggleIsFetching: toggleIsFetchingAC,
})(UsersContainer)