import React from 'react';
import styled from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ResponseProfileType} from "../ProfileContainer";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type PropsType = {
    profile: ResponseProfileType
    status: string,
    updateStatus: (status: string) => void

}
export const ProfileInfo = (props: PropsType) => {

    if (!props.profile) {
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
                    <div>Full name: {props.profile.fullName}</div>
                    {props.profile.photos.small ?
                        <img src={props.profile.photos.small} alt='profile-logo'/> : 'User Photo:'}
                    <div>Instagram: {props.profile.contacts.instagram}</div>
                    <div>Github: {props.profile.contacts.github}</div>
                </div>
                {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
};

