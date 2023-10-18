import React from 'react';
import {Field, reduxForm} from "redux-form";

export const LoginForm: React.FC = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} type="text" placeholder={'Login'} component={'input'}/>
            </div>
            <div>
                <Field name={'password'} type="text" placeholder={'Password'} component={'input'}/>
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

export const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>
    );
};

