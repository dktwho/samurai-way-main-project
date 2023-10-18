import React from 'react';
import {reduxForm} from "redux-form";

export const LoginForm = () => {
    return (
        <form>
            <div>
                <input type="text" placeholder={'Login'}/>
            </div>
            <div>
                <input type="email" placeholder={'Password'}/>
            </div>
            <div>
                <input type="checkbox"/>Remember me
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

