import React from "react";
import {ResponseProfileType} from "../ProfileContainer";
import styled from "./ProfileInfo.module.css";
import {createField, Input, TextArea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

type ProfileDataFormType = {
    profile: ResponseProfileType
    onSubmit: (formData: any) => typeof formData
    // onSubmit: (formData: any) => void

}

const ProfileDataForm = ({profile, onSubmit}: ProfileDataFormType) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                <button>SAVE</button>
            </div>
            <div className={styled.descriptionBlock}>
                <div><b>Full name:</b> {createField('text', 'fullname', 'fullName', [], Input, '')}</div>
                <div><b>lookingForAJob</b>:{createField('checkbox', '', 'lookingForAJob', [], Input, '')}</div>
                <div>lookingForAJobDescription: {profile.lookingForAJobDescription} {createField('textarea', 'my professional skills', 'lookingForAJobDescription', [], TextArea, '')}</div>
                <div><b>aboutMe</b>: {profile.aboutMe} {createField('textarea', 'aboutMe', 'aboutMe', [], TextArea, '')}
                </div>
                {/*<div><b>Contacts: </b>*/}
                {/*    {Object.keys(profile.contacts).map((key) => {*/}
                {/*        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
                {/*    })}*/}
                {/*</div>*/}

            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<any, any, any>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm