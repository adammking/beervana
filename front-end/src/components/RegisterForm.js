import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { registerUserWithApi } from "../actions/auth";

function RegisterForm() {
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: ""
    });

    function registerApi(loginData) {
        dispatch(registerUserWithApi(loginData))
    }

    function handleChange(evt) {
        const {name, value} = evt.target;
        setUserData(data => ({
        ...data,
        [name]: value
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        registerApi(userData);
    }


    return (
        <form onSubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="newuserform-username">Username: </label>
                <input onChange={handleChange}
                        id="newuserform-username"
                        name="username"
                        className="form-control"
                        value={userData.username}/>            
            
            </div>

            <div className="form-group">
                <label htmlFor="newuserform-password">Password: </label>
                <input onChange={handleChange}
                        id="newuserform-password"
                        name="password"
                        className="form-control"
                        value={userData.password}/>
            </div>

             <div className="form-group">
                <label htmlFor="newuserform-first">First Name: </label>
                <input onChange={handleChange}
                        id="newuserform-first"
                        name="firstName"
                        className="form-control"
                        value={userData.firstName}/>
            </div>

             <div className="form-group">
                <label htmlFor="newuserform-last">Last Name: </label>
                <input onChange={handleChange}
                        id="newuserform-last"
                        name="lastName"
                        className="form-control"
                        value={userData.lastName}/>
            </div>

            <button type="submit">Regiser</button>

        </form>
    )
    
}



export default RegisterForm