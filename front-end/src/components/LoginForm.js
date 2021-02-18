import React, { useState } from "react";


function LoginForm() {

    const [loginData, setLoginData] = useState({
        username,
        password
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
        <form onsubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="loginform-username"> </label>
                <input onChange={handleChange}
                        id="loginform-username"
                        name="username"
                        className="form-control"
                        value={loginData.username}/>            
            
            </div>

            <div className="form-group">
                <label htmlFor="loginform-password"> </label>
                <input onChange={handleChange}
                        id="loginform-password"
                        name="password"
                        className="form-control"
                        value={loginData.password}/>
            </div>

            <button>Login</button>

        </form>
    )
    
}

export default LoginForm;