import React, {Component} from 'react';
import {Profile} from "./Profile";

class ProfileContainer extends Component {
    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }
}

export default ProfileContainer;