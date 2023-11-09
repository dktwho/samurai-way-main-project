import React, {useState} from 'react';
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

type ProfileDataType = {
    goToEditMode: () => void
    profile: ResponseProfileType
    isOwner: boolean
}

type ProfileDataFormType = {
    profile: ResponseProfileType
}


export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: PropsType) => {
    const [editMode, setEditMode] = useState(false)
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
            <img src={profile.photos.small || userIcon3} alt='profile-logo'/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            {editMode ? <ProfileDataForm profile={profile}/> : <ProfileData goToEditMode={() => {
                setEditMode(true)
            }} profile={profile} isOwner={isOwner}/>}

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>

    );
};

const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataType) => {
    return (
        <div> {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
            <div className={styled.descriptionBlock}>
                <div><b>Full name:</b> {profile.fullName}</div>
                <div><b>aboutMe</b>: {profile.aboutMe}</div>
                <div><b>lookingForAJob</b>: {profile.lookingForAJob ? 'Yes' : 'No'}</div>
                {profile.lookingForAJobDescription &&
                    <div>lookingForAJobDescription: {profile.lookingForAJobDescription}</div>}
                <div><b>Contacts: </b>
                    {Object.keys(profile.contacts).map((key) => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                </div>

            </div>
        </div>
    )
}

const ProfileDataForm = ({profile}: ProfileDataFormType) => {
    return (
        <div>
            <form action=""></form>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}: any) => {
    return (
        <div className={styled.contact}><b>{contactTitle}</b>: {contactValue}</div>
    )
}


