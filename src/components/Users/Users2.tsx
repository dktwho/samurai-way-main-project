import React from 'react';
import styles from "./users.module.css";
import userIcon3 from "../../assets/userIcon3.jpeg";
import {InitialStateType} from "../../redux/usersReducer";

type PropsType = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    currentPage: number
    pageSize: number
    usersPage: InitialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void

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
                return <div key={u.id}>
                    <span>
                        <div>
                            <img style={{width: '40px'}}
                                 src={u.photos.small ? u.photos.small : userIcon3}
                                 className={styles.userPhoto} alt="photo"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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
    );

};
