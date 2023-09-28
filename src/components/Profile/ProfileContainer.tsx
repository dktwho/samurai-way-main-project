import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ResponseProfileType, setUserProfileAC, SetUserProfileActionType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType, unknown> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 1
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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
export default connect(mapStateToProps, {setUserProfileAC})(WitUrlDataContainerComponent);