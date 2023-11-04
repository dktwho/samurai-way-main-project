import React from 'react';
import styled from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ResponseProfileType} from "../ProfileContainer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

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
                <div>
                    <div>
                        <img width={'200px'} height={'200px'}
                             src="https://img.freepik.com/premium-photo/cartoon-image-man-with-blue-shirt-orange-circle-with-words-s-it_745528-2802.jpg"
                             alt="my-avatar"/>
                    </div>
                    <div>Full name: {profile.fullName}</div>
                    {profile.photos.small ?
                        <img src={profile.photos.small} alt='profile-logo'/> : 'User Photo:'}
                    <div>Instagram: {profile.contacts.instagram}</div>
                    <div>Github: {profile.contacts.github}</div>
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

