import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {SetUserProfileActionType} from "../../redux/store";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfileThunkCreator} from "../../redux/profileReducer";
import {RootReducerType} from "../../redux/reduxStore";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type ResponseProfileType = {
    aboutMe: string;
    contacts: ContactsType;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: PhotoType;
}
type ContactsType = {
    facebook: string;
    website?: any;
    vk: string;
    twitter: string;
    instagram: string;
    youtube?: any;
    github: string;
    mainLink?: any;
}

type PhotoType = {
    small: string;
    large: string;
}

type MapStateToPropsType = {
    profile: ResponseProfileType
    isAuth: boolean
    match: {
        isExact: boolean,
        params: {
            userId: number
        }
    },
}
type MapDispatchToPropsType = {
    setUserProfileAC: (data: SetUserProfileActionType) => void
    getUserProfileThunkCreator: (userId: number) => void
}

class ProfileContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType, unknown> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 1
        }
        this.props.getUserProfileThunkCreator(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} isAuth={this.props.isAuth}/>
        );
    }
}

let mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    match: {
        isExact: true,
        params: {
            userId: 1
        }
    },
})

export default compose<React.ComponentType>(
    connect(mapStateToProps,{getUserProfileThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)