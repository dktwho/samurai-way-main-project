import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {SetUserProfileActionType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfileThunkCreator} from "../../redux/profileReducer";

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
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}


let mapStateToProps = (state: any): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    match: {
        isExact: true,
        params: {
            userId: 1
        }
    },
})

let WitUrlDataContainerComponent = withRouter<RouteComponentProps, any>(ProfileContainer)
export default connect(mapStateToProps, {getUserProfileThunkCreator})(WitUrlDataContainerComponent);