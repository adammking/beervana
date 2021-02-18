import React from "react";
import { useDispatch } from "react-redux";
import { getTokenFromApi } from "../actions/auth";
import LoginForm from "./LoginForm"

function Home() {
    const dispatch = useDispatch();
    
    function login(data) {
        let token = dispatch(getTokenFromApi(data));
        localStorage.setItem("token", token)
    }

    return (
        <div>
            <h1>Welcome to Beervana!</h1>
            <LoginForm login={login}/>
        </div>
    )
    
}

export default Home;