import React from 'react';
import styled from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ResponseProfileType} from "../ProfileContainer";

type PropsType = {
    profile: ResponseProfileType
}
export const ProfileInfo = (props: PropsType) => {

    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div >
            <div>
                <img
                    src="https://www.freewebheaders.com/wp-content/gallery/nature-size-800x200/beautiful-river-trees-snow-mountain-clouds-nature-landscape-web-header_size-800x200.jpg"
                    alt="profile-logo"
                />
            </div>
            <div className={styled.descriptionBlock}>
                <div>
                    <div>Full name: {props.profile.fullName}</div>
                    <img src={props.profile.photos.small} alt='profile-photo'/>
                    <div>Instagram: {props.profile.contacts.instagram}</div>
                    <div>Github: {props.profile.contacts.github}</div>
                </div>
                Ava + description
            </div>
        </div>
    );
};

