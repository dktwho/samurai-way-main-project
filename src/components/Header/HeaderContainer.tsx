import React, {Component} from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/authReducer";


// type ResponseType = {
//     resultCode: number
//     messages: MyPostsType[],
//     data: {
//         userId: number,
//         email: string,
//         login: string
//     }
// }

class HeaderContainer extends Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
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