import React from 'react';
import styles from "./users.module.css";
import userIcon3 from "../../assets/userIcon3.jpeg";
import {InitialStateType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    currentPage: number
    pageSize: number
    usersPage: InitialStateType
    // follow: (userId: number) => void
    // unfollow: (userId: number) => void
    toggleIsFetchingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void


}


export const Users2 = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pagesArrCount = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArrCount.push(i)
    }

    return (
        <div>
            <div>
                {pagesArrCount.map(el => {
                    return (
                        <span onClick={() => props.onPageChanged(el)}
                              className={props.currentPage === el ? styles.selectedPage : ''}>{el}</span>
                    )
                })}
            </div>
            {props.usersPage.users.map(u => {
                return <div>
                    <span>
                        <div>
                            <NavLink to={`./profile/${u.id}`}>
                                    <img style={{width: '40px'}}
                                         src={u.photos.small ? u.photos.small : userIcon3}
                                         className={styles.userPhoto} alt="photo"/>
                            </NavLink>

                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    // props.toggleIsFetchingProgress(true, u.id);
                                    // usersAPI.unfollow(u).then((res) => {
                                    //     if (res.data.resultCode === 0) {
                                    //         props.unfollow(u.id)
                                    //     }
                                    //     props.toggleIsFetchingProgress(false, u.id);
                                    // });
                                    props.unFollowThunkCreator(u.id)
                                }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    // props.toggleIsFetchingProgress(true, u.id);
                                    // usersAPI.follow(u).then((res) => {
                                    //     if (res.data.resultCode === 0) {
                                    //         props.follow(u.id)
                                    //     }
                                    //     props.toggleIsFetchingProgress(false, u.id);
                                    // });
                                    // props.follow(u.id)
                                    props.followThunkCreator(u.id)


                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            <div>ID: {u.id}</div>
                        </span>
                        <span>
                            <div>{'u.location.state'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>
            })}
        </div>
    )
        ;

};
