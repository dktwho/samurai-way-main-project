import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {
    getUserProfileThunkCreator,
    getUsersStatusThunkCreator, savePhotoThunkCreator, saveProfileThunkCreator,
    SetUserProfileActionType,
    updateUsersStatusThunkCreator
} from "../../redux/profileReducer";
import {RootReducerType} from "../../redux/reduxStore";
import {compose} from "redux";

export type ResponseProfileType = {
    aboutMe: string;
    contacts: ContactsType;
    lookingForAJob: boolean;
    lookingForAJobDescription: string ;
    fullName: string;
    userId: number;
    photos: PhotoType;
}
export type ContactsType = {
    facebook?: string;
    website?: string;
    vk?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    github?: string;
    mainLink?: string;
    [key: string]: any;
}

type PhotoType = {
    small: string;
    large: string;
}

type MapStateToPropsType = {
    profile: ResponseProfileType
    isAuth: boolean
    authorizedUserId: number
    status: string
}

type PathParamType = {
    userId?: string
}

type MapDispatchToPropsType = {
    setUserProfileAC: (data: SetUserProfileActionType) => void
    getUserProfileThunkCreator: (userId: number) => void
    getUsersStatusThunkCreator: (userId: number) => void
    updateUsersStatusThunkCreator: (status: string) => void
    savePhotoThunkCreator: (file: any) => void
    saveProfileThunkCreator: (profile: any) => void
}

class ProfileContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamType>> {
    refreshProfile() {
        const pathUserId = this.props.match.params.userId
        let userId = this.props.authorizedUserId
        if (!pathUserId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        } else {
            userId = +pathUserId
        }
        this.props.getUserProfileThunkCreator(userId)
        this.props.getUsersStatusThunkCreator(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     isAuth={this.props.isAuth}
                     status={this.props.status}
                     updateStatus={this.props.updateUsersStatusThunkCreator}
                     savePhoto={this.props.savePhotoThunkCreator}
                     saveProfile={this.props.saveProfileThunkCreator}
            />
        );
    }
}

let mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.id,
    status: state.profilePage.status,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileThunkCreator,
        getUsersStatusThunkCreator,
        updateUsersStatusThunkCreator,
        savePhotoThunkCreator,
        saveProfileThunkCreator
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)