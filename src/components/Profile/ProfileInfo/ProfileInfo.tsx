import React from 'react';
import styled from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ResponseProfileType} from "../ProfileContainer";
import ProfileStatus from "./ProfileStatus";

type PropsType = {
    profile: ResponseProfileType
}
export const ProfileInfo = (props: PropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={styled.descriptionBlock}>
                <div>
                    <div>Full name: {props.profile.fullName}</div>
                    <img src={props.profile.photos.small} alt='profile-logo'/>
                    <div>Instagram: {props.profile.contacts.instagram}</div>
                    <div>Github: {props.profile.contacts.github}</div>
                </div>
                <ProfileStatus status={'Hello friends'}/>
            </div>
        </div>
    );
};

