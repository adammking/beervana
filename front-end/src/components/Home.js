import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { getTokenFromApi, registerUserWithApi } from "../actions/auth";
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

function Home() {
    const [loginView, setLoginView] = useState(true);
    const dispatch = useDispatch();

    
    function loginApi(data) {
        dispatch(getTokenFromApi(data))
    }

    function registerApi(data) {
        dispatch(registerUserWithApi(data))
    };

    function toggleLogin() {
        setLoginView(!loginView);
    }
    
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

export default Home;