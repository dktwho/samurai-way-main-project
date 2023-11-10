import React from "react";
import styled from "./ProfileInfo.module.css";
import {createField, Input, TextArea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import {ResponseProfileType} from "../ProfileContainer";

type ProfileDataFormType = {
    handleSubmit: (formData: any) => void
    initialValues: ResponseProfileType

}

const ProfileDataForm = ({ handleSubmit}: ProfileDataFormType) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>SAVE</button>
            </div>
            <div className={styled.descriptionBlock}>
                <div><b>Full name:</b> {createField('text', 'fullname', 'fullName', [], Input, '')}</div>
                <div><b>lookingForAJob</b>:{createField('checkbox', '', 'lookingForAJob', [], Input, '')}</div>
                <div>lookingForAJobDescription:  {createField('textarea', 'my professional skills', 'lookingForAJobDescription', [], TextArea, '')}</div>
                <div><b>aboutMe</b>:  {createField('textarea', 'aboutMe', 'aboutMe', [], TextArea, '')}
                </div>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<any, any, any>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm