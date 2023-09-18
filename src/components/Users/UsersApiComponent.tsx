import React from "react";
import axios from "axios"
import {MapDispatchToPropsType, MapStatePropsType} from "./UsersContainer";
import {Users2} from "./Users2";

const settings = {
    withCredentials: true
}

type PropsType = MapStatePropsType & MapDispatchToPropsType

export class UsersApiComponent extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.currentPage}`, settings)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.currentPage}`, settings)
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (
            <Users2 onPageChanged={this.onPageChanged} totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize} currentPage={this.props.currentPage} usersPage={this.props.usersPage}
            follow={this.props.follow} unfollow={this.props.unfollow}  />
        )
    }
}

