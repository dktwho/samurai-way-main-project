import React, {useEffect} from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './users.module.css'
import axios from "axios";
import userIcon3 from '../../assets/userIcon3.jpeg'


const settings = {
    withCredentials: true
}

export const Users = (props: UsersPropsType) => {
    let getUsers = () => {
        if (props.usersPage.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users`, settings)
                .then((res) => {
                    props.setUsers(res.data.items)
                })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>get Users from API</button>
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
// 'https://icon-library.com/images/bart-simpson-icon/bart-simpson-icon-5.jpg'