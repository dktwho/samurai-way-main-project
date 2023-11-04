import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {
    getUserProfileThunkCreator,
    getUsersStatusThunkCreator, SetUserProfileActionType,
    updateUsersStatusThunkCreator
} from "../../redux/profileReducer";
import {RootReducerType} from "../../redux/reduxStore";
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
}

class ProfileContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamType>> {
    componentDidMount() {
        const pathUserId = this.props.match.params.userId
        let userId = this.props.authorizedUserId
        if (!pathUserId) {
            // userId = +pathUserId;
            userId = this.props.authorizedUserId
            if(!userId) {
               this.props.history.push('/login')
            }
        }
        // this.props.getUserProfileThunkCreator(Number(pathUserId) ?? userId)
        // }
        this.props.getUserProfileThunkCreator(userId)
        this.props.getUsersStatusThunkCreator(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     isAuth={this.props.isAuth}
                     status={this.props.status}
                     updateStatus={this.props.updateUsersStatusThunkCreator}/>
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
    connect(mapStateToProps, {getUserProfileThunkCreator, getUsersStatusThunkCreator, updateUsersStatusThunkCreator}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)