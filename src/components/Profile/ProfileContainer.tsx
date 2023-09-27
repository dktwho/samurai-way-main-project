import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ResponseProfileType, setUserProfileAC, SetUserProfileActionType} from "../../redux/store";

class ProfileContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType, unknown> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/9`)
            .then(res => {
                this.props.setUserProfileAC(res.data)

            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}
type MapStateToPropsType = {
    profile:ResponseProfileType
}
type MapDispatchToPropsType = {
    setUserProfileAC:(data:SetUserProfileActionType)=>void
}
let mapStateToProps = (state: any):MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfileAC})(ProfileContainer);