import React from 'react';

function RegisterForm() {

    const [userData, setUserData] = useState({
        username,
        password,
        firstName,
        lastName
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
        add(userData);
    }


    return (
        <form onsubmit={handleSubmit}>

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

            <button>Login</button>

        </form>
    )
    
}



export default RegisterForm