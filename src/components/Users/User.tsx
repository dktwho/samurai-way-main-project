import React from 'react';
import styles from "./users.module.css";
import userIcon3 from "../../assets/userIcon3.jpeg";
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/usersReducer";

type PropsType = {
    user: UserType,
    followingInProgress: Array<number>
    unFollowThunkCreator: (userId: number) => void
    followThunkCreator: (userId: number) => void
}

export const User = ({user, followingInProgress, unFollowThunkCreator, followThunkCreator}: PropsType) => {
    let u = user
    return (
        <div>
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
                                ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                    unFollowThunkCreator(u.id)
                                }}>Unfollow</button>

                                : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                    followThunkCreator(u.id)
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
    );
};
