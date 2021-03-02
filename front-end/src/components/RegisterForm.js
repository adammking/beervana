import React, { useState } from 'react';
import "./RegisterForm.css"

function RegisterForm({register}) {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: ""
    });

    

    function handleChange(evt) {
        const {name, value} = evt.target;
        setUserData(data => ({
        ...data,
        [name]: value
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        register(userData);
    }


    return (


 <form onSubmit={handleSubmit}> 

  <div className="mb-3">
    <input id="loginform-username" onChange={handleChange} aria-describedby="usernames" name="username" className="form-control" value={userData.username} placeholder="Username"/>
  </div>

  <div className="mb-3">
    <input type="password" className="form-control" onChange={handleChange} id="newuserform-password" name="password" placeholder="Password" value={userData.password}/>
  </div>

    <div className="mb-3">
     <input className="form-control" onChange={handleChange} id="newuserform-first" name="firstName" placeholder="First Name" value={userData.firstName}/>
   </div>

<div className="mb-3">
    <input className="form-control" onChange={handleChange} id="newuserform-last" name="lastName" placeholder="Last Name" value={userData.lastName}/>
  </div>

  <button type="submit" className="btn btn-warning btn-sm">Register</button>
</form>
    )
    
}



export default RegisterForm