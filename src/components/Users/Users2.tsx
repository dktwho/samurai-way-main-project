import React from 'react';
import {InitialStateType} from "../../redux/usersReducer";
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User";

type PropsType = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    currentPage: number
    pageSize: number
    usersPage: InitialStateType
    followingInProgress: Array<number>
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void
}

export const Users2 = (props: PropsType) => {
    return (
        <div>
            <Pagination totalUsersCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}/>
            <div>
                {props.usersPage.users.map(u => {
                    return <User key={u.id}
                                 user={u}
                                 unFollowThunkCreator={props.unFollowThunkCreator}
                                 followThunkCreator={props.followThunkCreator}
                                 followingInProgress={props.followingInProgress}/>
                })}
            </div>

        </div>
    );
};
