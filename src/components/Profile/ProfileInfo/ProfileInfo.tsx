import React from 'react';
import styled from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ResponseProfileType} from "../ProfileContainer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userIcon3 from '../../../assets/userIcon3.jpeg'

type PropsType = {
    profile: ResponseProfileType
    status: string,
    updateStatus: (status: string) => void

}
export const ProfileInfo = ({profile, status, updateStatus}: PropsType) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={styled.descriptionBlock}>
                <div>Full name: {profile.fullName}</div>
                <img src={profile.photos.small || userIcon3} alt='profile-logo'/>
                <div>Instagram: {profile.contacts.instagram}</div>
                <div>Github: {profile.contacts.github}</div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

