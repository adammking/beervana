import React, { useEffect, useState } from 'react';
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import { useDispatch, useSelector } from "react-redux";
import { getTokenFromApi } from "../actions/auth";
import { getUserFromApi } from "../actions/user";
import { useHistory } from "react-router-dom";
import { decode } from "jsonwebtoken";

function Login() {
    const [loginView, setLoginView] = useState(true);
    const token = useSelector(st => st.auth.token) 
    const username = decode(token)
    const auth = useSelector(st => st.auth.authenticated)

    const dispatch = useDispatch();
    const history = useHistory();

    function toggleLogin() {
        setLoginView(!loginView);
    }

    function loginApi(loginData) {
        console.log(token, auth)
        dispatch(getTokenFromApi(loginData))
        console.log(token)
        if (token && auth) {
            history.push(`users/:username`)
        } else {
            history.push("/login")
        }
    }
    
    
    
    const loginFields = (<>
        <LoginForm login={loginApi}/> 
        <aside>New User? <button onClick={toggleLogin}>Click Here</button>to register</aside>
        </>)


    const registerFields = (<>
        <RegisterForm />
        <aside>Already Registered? <button onClick={toggleLogin}>Click Here</button>to sign in</aside>
        </>)

    return (
        <div>
            <h1>Welcome to Beervana!</h1>
            {loginView ? loginFields : registerFields}
        </div>
    )
    
}

export default Login;