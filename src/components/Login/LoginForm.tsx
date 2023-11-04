import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {RootReducerType} from "../../redux/reduxStore";
import styles from '../../components/common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type MapStateToPropsType = {
    isAuth: boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}: any) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('text', 'Email', 'email', [required], 'input', '')}
            {createField('password', 'Password', 'password', [required], 'input', '')}
            {createField('checkbox', '', 'rememberMe', [], 'input', 'Remember me')}
            <div>
                {error && <div className={styles.formSummaryError}>{error}</div>}
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)


type LoginPropsType = {
    isAuth: boolean,
    loginThunkCreator: (email: string, password: string, isAuth: boolean) => void
}
const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {loginThunkCreator})(Login)
