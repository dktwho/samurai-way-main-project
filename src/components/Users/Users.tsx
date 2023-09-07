import React, {useEffect} from 'react';
import {UsersPropsType} from "./UsersContainer";

import styles from './users.module.css'

export const Users = (props: UsersPropsType) => {

    useEffect(() => {
        props.setUsers([{
            id: 1,
            fullName: 'Bill B',
            photoUrl: 'https://icon-library.com/images/bart-simpson-icon/bart-simpson-icon-5.jpg',
            status: 'hello ',
            followed: false,
            location: {city: 'Los-Angeles', state: 'California'}
        },
            {
                id: 2,
                fullName: 'Sam W',
                photoUrl: 'https://icon-library.com/images/bart-simpson-icon/bart-simpson-icon-5.jpg',
                status: 'hmmm!',
                followed: true,
                location: {city: 'New York', state: 'New York'}
            },
            {
                id: 3,
                fullName: 'Tedd L.',
                photoUrl: 'https://icon-library.com/images/bart-simpson-icon/bart-simpson-icon-5.jpg',
                status: 'show me...',
                followed: false,
                location: {city: 'New Orleans', state: 'Louisiana'}
            },
            {
                id: 4,
                fullName: 'Bob R.',
                photoUrl: 'https://icon-library.com/images/bart-simpson-icon/bart-simpson-icon-5.jpg',
                status: 'U-S-A',
                followed: true,
                location: {city: 'Richmond', state: 'Virginia'}
            },
            {
                id: 5,
                fullName: 'Tucker K.',
                photoUrl: 'https://icon-library.com/images/bart-simpson-icon/bart-simpson-icon-5.jpg',
                status: 'i love Democratic Party,',
                followed: true,
                location: {city: 'Houston', state: 'Texas'}
            }])
    }, [])




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

