import React, { useEffect, useState } from 'react';
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import { useDispatch, useSelector } from "react-redux";
import { getTokenFromApi, registerUserWithApi } from "../actions/auth";
import { useHistory } from "react-router-dom";
import { decode } from "jsonwebtoken";

function Login() {
    const [loginView, setLoginView] = useState(true);
    const token = useSelector(st => st.auth.token) 
    const auth = useSelector(st => st.auth.authenticated)

    const dispatch = useDispatch();
    const history = useHistory();

    function toggleLogin() {
        setLoginView(!loginView);
    }

    function loginApi(loginData) {
        dispatch(getTokenFromApi(loginData))
    }

    function registerApi(loginData) {
        dispatch(registerUserWithApi(loginData))
    }

    useEffect(function() {
        if (token && auth) {
            const { username } = decode(token)
            history.push(`users/${username}`)
        } else {
            history.push("/login")
        }
    }, [token, auth])
    
    
    
    const loginFields = (<>
        <LoginForm login={loginApi}/> 
        <aside>New User? <button onClick={toggleLogin}>Click Here</button>to register</aside>
        </>)


    const registerFields = (<>
        <RegisterForm register={registerApi}/>
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