import React, {Component} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/store";





class ProfileContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((res) => {
                 setUserProfileAC(res.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        );
    }
}

let mapStateToProps = (state: any) => ({
    a: 31
})
export default connect(mapStateToProps, {setUserProfileAC})(ProfileContainer);