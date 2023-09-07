import React from 'react';
import {UsersPropsType} from "./UsersContainer";

import styles from './users.module.css'

export const Users = (props: UsersPropsType) => {
    return (
        <div>
            {props.usersPage.users.map(u => {
                return <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} alt="photo"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.state}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            })}
        </div>
    );
};

