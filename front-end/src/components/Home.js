import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTokenFromApi } from "../actions/auth";
import LoginForm from "./LoginForm"
import useLocalStorage from "./hooks/useLocalStorage"

function Home() {
    const dispatch = useDispatch();
    const token = useSelector(st => st.token)
    function login(data) {
        dispatch(getTokenFromApi(data));
    }

    function setToken() {
        
    }


    return (
        <div>
            <h1>Welcome to Beervana!</h1>
            <LoginForm login={login}/>
        </div>
    )
    
}

export default Home;