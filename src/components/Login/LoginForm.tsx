import React from 'react';

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

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
};

