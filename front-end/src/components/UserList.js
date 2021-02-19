import React, { useEffect } from 'react';
import { getAllUsersFromApi } from "../actions/user"
import { useDispatch, useSelector } from "react-redux";
import User from "./User"

function UserList() {

    const dispatch = useDispatch();
     
    useEffect(function() {
        dispatch(getAllUsersFromApi())
    }, [dispatch])
    

    const users = useSelector(st => st.users) ;

    return (
        <div>
            <ul>
                {users.map(data => (
                    <li><User data={data}/></li>
                ))}
            </ul>
        </div>
    )
};



export default UserList;