import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {RootReducerType} from "../../redux/reduxStore";
import styles from '../../components/common/FormsControls/FormsControls.module.css'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type LoginFormValuesTypeKeys = keyof FormDataType

type MapStateToPropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType, { captchaUrl: string | null }> & {
    captchaUrl: string | null
}> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>('text', 'Email', 'email', [required], 'input', '')}
            {createField<LoginFormValuesTypeKeys>('password', 'Password', 'password', [required], 'input', '')}
            {createField<LoginFormValuesTypeKeys>('checkbox', '', 'rememberMe', [], 'input', 'Remember me')}
            {captchaUrl && <img src={captchaUrl} alt={'captcha'}/>}
            {captchaUrl && createField<LoginFormValuesTypeKeys>('text', 'Symbols from image', 'captcha', [required], 'input', '')}

            <div>
                {error && <div className={styles.formSummaryError}>{error}</div>}
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType, { captchaUrl: string | null }>({
    form: 'login',
})(LoginForm)


type LoginPropsType = {
    isAuth: boolean,
    loginThunkCreator: (email: string, password: string, isAuth: boolean, captcha: string | null) => void
    captchaUrl: string | null
}
const Login: React.FC<LoginPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
    captchaUrl: state.auth.captchaUrl || null,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {loginThunkCreator})(Login)
