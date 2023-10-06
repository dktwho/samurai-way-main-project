import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootReducerType} from "../redux/reduxStore";

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component: any) => {
    const RedirectComponent = (props: MapStateToPropsType) => {
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...props}/>
    };

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}

