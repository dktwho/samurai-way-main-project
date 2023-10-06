import React from 'react';
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/reduxStore";
import {
    setCurrentPageAC,
    toggleIsFetchingProgressAC,
} from "../../redux/store";
import {
    followThunkCreator,
    getUsersThunkCreator,
    unFollowThunkCreator,
    InitialStateType,
} from "../../redux/usersReducer";
import {Users2} from "./Users2";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PropsType = MapStatePropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
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
                        followingInProgress={this.props.followingInProgress}
                        followThunkCreator={this.props.followThunkCreator}
                        unFollowThunkCreator={this.props.unFollowThunkCreator}
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
    setCurrentPage: (currentPage: number) => void
    toggleIsFetchingProgress: (isFetching: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void
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

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
    setCurrentPage: setCurrentPageAC,
    toggleIsFetchingProgress: toggleIsFetchingProgressAC,
    getUsersThunkCreator,
    followThunkCreator,
    unFollowThunkCreator,
})) (UsersContainer)