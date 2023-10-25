import React, {Component} from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {logOutThunkCreator} from "../../redux/authReducer";

type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
    // getAuthUserDataThunkCreator: () => void
}

class HeaderContainer extends Component<MapStateToPropsType & MapDispatchToPropsType, unknown> {
    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logOutThunkCreator})(HeaderContainer);