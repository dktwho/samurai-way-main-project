import React from 'react';
import styled from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ResponseProfileType} from "../../../redux/store";

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
                <div>{props.profile.fullName}</div>
                Ava + description
            </div>
        </div>
    );
};

