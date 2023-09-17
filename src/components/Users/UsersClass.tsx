import React from "react";
import userIcon3 from "../../assets/userIcon3.jpeg";
import styles from "./users.module.css";
import axios from "axios"
import {MapDispatchToPropsType, MapStatePropsType} from "./UsersContainer";

const settings = {
    withCredentials: true
}

type PropsType = MapStatePropsType & MapDispatchToPropsType

export class Users extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`, settings)
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (
            <div>
                {this.props.usersPage.users.map(u => {
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
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
    }
}