import React from 'react';
import {Field, reduxForm} from "redux-form";

export const LoginForm = () => {
    return (
        <form>
            <div>
                <Field name={'login'} type="text" placeholder={'Login'} component={'input'}/>
            </div>
            <div>
                <Field name={'password'} type="email" placeholder={'Password'} component={'input'}/>
            </div>
            <div>
                <Field name={'rememberMe'} type="checkbox" component={'input'}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm/>

        </div>
    );
};

