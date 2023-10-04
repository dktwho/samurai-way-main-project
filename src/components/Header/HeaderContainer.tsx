import React, {Component} from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/authReducer";
import {authAPI} from "../../api/api";

// !!! make headerApi thunk move to apart api and Profile container
class HeaderContainer extends Component<any, any> {
    componentDidMount() {
        authAPI.authMe()
            .then((res) => {
                if (res.data.resultCode === 0) {
                    this.props.setUserDataAC(res.data.data)
                }
            })
    }

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
export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer);