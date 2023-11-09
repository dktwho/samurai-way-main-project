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
    isOwner: boolean
    savePhoto: (file: any) => void

}
export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: PropsType) => {

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={styled.descriptionBlock}>
                <div>Full name: {profile.fullName}</div>
                <img src={profile.photos.small || userIcon3} alt='profile-logo'/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <div>Instagram: {profile.contacts.instagram}</div>
                <div>Github: {profile.contacts.github}</div>
                <div>aboutMe: {profile.aboutMe}</div>
                <div>lookingForAJob: {profile.lookingForAJob}</div>
                <div>lookingForAJobDescription: {profile.lookingForAJobDescription}</div>
                <div>vk: {profile.contacts.vk}</div>
                <div>facebook: {profile.contacts.facebook}</div>
                <div>twitter: {profile.contacts.twitter}</div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

