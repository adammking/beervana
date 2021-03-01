import React, { useState } from 'react';

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
    <label htmlFor="newuserform-username" className="form-label">Username</label>
    <input id="loginform-username" onChange={handleChange} aria-describedby="usernames" name="username" className="form-control" value={userData.username}/>
  </div>

  <div className="mb-3">
    <label htmlFor="newuserform-password" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={handleChange} id="newuserform-password" name="password" value={userData.password}/>
  </div>

    <div className="mb-3">
     <label htmlFor="newuserform-first" className="form-label">First Name:</label>
     <input className="form-control" onChange={handleChange} id="newuserform-first" name="firstName" value={userData.firstName}/>
   </div>

<div className="mb-3">
    <label htmlFor="newuserform-last" className="form-label">Last Name:</label>
    <input className="form-control" onChange={handleChange} id="newuserform-last" name="lastName" value={userData.lastName}/>
  </div>

  <button type="submit" className="btn btn-primary">Register</button>
</form>
    )
    
}



export default RegisterForm