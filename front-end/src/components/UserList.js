import React, { useEffect } from 'react';
import { getAllUsersFromApi } from "../actions/user"
import { useDispatch, useSelector } from "react-redux";
import User from "./User"

function UserList() {

    const dispatch = useDispatch();

    useEffect(function() {
        dispatch(getAllUsersFromApi())
    }, [dispatch])


    

    const users = useSelector(st => st.user.users);



    return (
        <div>
            <h3>Users:</h3>
            {users.length > 0 ? 
            <ul>
                {users.map(data => (
                    <li>{data.username}</li>
                ))}
            </ul>
            : <h5>No Users</h5>}
        </div>
    )
}




export default UserList;