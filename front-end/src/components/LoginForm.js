import React, { useState } from "react";
import "./LoginForm.css"


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

<div className="container">   
<form onSubmit={handleSubmit}> 
  <div className="mb-3">
    <input id="loginform-username" 
            onChange={handleChange} 
            aria-describedby="username" 
            name="username" 
            className="form-control" 
            value={loginData.username}
            placeholder="Username"/>
  </div>

  <div className="mb-3">
    <input type="password" 
    className="form-control" 
    onChange={handleChange} 
    id="loginform-password" 
    name="password" 
    value={loginData.password} 
    placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-warning btn-sm">Login</button>
</form>
</div> 
    )
    
}

export default LoginForm;