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
                <div><b>Full name:</b> {profile.fullName}</div>
                <img src={profile.photos.small || userIcon3} alt='profile-logo'/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <div><b>aboutMe</b>: {profile.aboutMe}</div>
                <div><b>lookingForAJob</b>: {profile.lookingForAJob ? 'Yes' : 'No'}</div>
                {profile.lookingForAJobDescription &&
                    <div>lookingForAJobDescription: {profile.lookingForAJobDescription}</div>}
                <div><b>Contacts: </b>
                    {Object.keys(profile.contacts).map((key) => {
                       return  <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })}
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};


const Contact = ({contactTitle, contactValue}: any ) => {
    return (
        <div><b>{contactTitle}</b>: {contactValue}</div>
    )
}
