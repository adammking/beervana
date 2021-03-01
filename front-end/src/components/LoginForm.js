import React, { useState } from "react";


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
        // <form onSubmit={handleSubmit}>

        //     <div classNameName="form-group">
        //         <label htmlFor="loginform-username">Username: </label>
        //         <input onChange={handleChange}
        //                 id="loginform-username"
        //                 name="username"
        //                 classNameName="form-control"
        //                 value={loginData.username}/>            
            
        //     </div>

        //     <div classNameName="form-group">
        //         <label htmlFor="loginform-password">Password: </label>
        //         <input onChange={handleChange}
        //                 id="loginform-password"
        //                 name="password"
        //                 classNameName="form-control"
        //                 value={loginData.password}/>
        //     </div>

        //     <button type="submit">Login</button>

        // </form>

        
<form onSubmit={handleSubmit}> 
  <div className="mb-3">
    <label htmlFor="loginform-username" className="form-label">Username</label>
    <input id="loginform-username" onChange={handleChange} aria-describedby="usernames" name="username" className="form-control" value={loginData.username}/>
  </div>
  <div className="mb-3">
    <label htmlFor="loginform-password" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={handleChange} id="loginform-password" name="password" value={loginData.password}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    )
    
}

export default LoginForm;