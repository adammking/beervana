import { getAllUsersFromApi } from "../actions/user"
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect }from "react";
import { addFollowWithApi, deleteFollowFromApi, getFollowingFromApi } from '../actions/follows';
import {decode}  from "jsonwebtoken"

function UserList() {

    const dispatch = useDispatch();
    const users = useSelector(st => st.user.users);
    const following = useSelector(st => st.follows.following)
    const { username } = decode(localStorage.getItem("token"))
    const followingIds = new Set()
    following.forEach(data => followingIds.add(data.users_being_followed_id))

    useEffect(function() {
        dispatch(getAllUsersFromApi())
        dispatch(getFollowingFromApi(username))
    }, [dispatch])


    function addFollow(id) {
        dispatch(addFollowWithApi(username, id))
        dispatch(getFollowingFromApi(username))

    }

    function unFollow(id) {
        dispatch(deleteFollowFromApi(username, id))
        dispatch(getFollowingFromApi(username))
    }



    return (
        <div>
            <h3>Users:</h3>
            {users.length > 0 ? 
            <ul>
                {users.map(data => (
                    <li key={data.id}>{data.username}
                    {followingIds.has(data.id) ? <button onClick={() => unFollow(data.id)}>Unfollow</button> : <button onClick={() => addFollow(data.id)}>Follow</button>}
                    </li>
                ))}
            </ul>
            : <h5>No Users</h5>}
        </div>
    )
}




export default UserList;