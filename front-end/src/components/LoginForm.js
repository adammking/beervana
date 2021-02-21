import React, { useEffect, useState } from "react";


function LoginForm({login}) {

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    function handleChange(evt) {
        const {name, value} = evt.target;
        setLoginData(data => ({
        ...data,
        [name]: value
        }));
    }


    function handleSubmit(evt) {
        evt.preventDefault();
        login(loginData);
    }


    return (
        <form onSubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="loginform-username">Username: </label>
                <input onChange={handleChange}
                        id="loginform-username"
                        name="username"
                        className="form-control"
                        value={loginData.username}/>            
            
            </div>

            <div className="form-group">
                <label htmlFor="loginform-password">Password: </label>
                <input onChange={handleChange}
                        id="loginform-password"
                        name="password"
                        className="form-control"
                        value={loginData.password}/>
            </div>

            <button type="submit">Login</button>

        </form>
    )
    
}

export default LoginForm;