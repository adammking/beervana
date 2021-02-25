import React, { useEffect, useState }from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFollowWithApi, getFollowersFromApi, deleteFollowFromApi, getFollowingFromApi } from '../actions/follows';
import { decode } from "jsonwebtoken"

function FollowerList() {
    
    const dispatch = useDispatch();
    const { username } = decode(localStorage.getItem("token"))
    const followers = useSelector(st => st.follows.followers) 
    const following = useSelector(st => st.follows.following)
    const followingIds = new Set()
    following.forEach(data => followingIds.add(data.users_being_followed_id))

    useEffect(function() {
        dispatch(getFollowersFromApi(username))
        dispatch(getFollowingFromApi(username))
    }, [dispatch, following.length, followers.length])


    function addFollow(id) {
        dispatch(addFollowWithApi(username, id))
    }

    function unFollow(id) {
        dispatch(deleteFollowFromApi(username, id))
        dispatch(getFollowingFromApi(username))
    }


    return (
        <div>
            <h3>Followers:</h3>
            {followers.length > 0 ? 
            <ul>
                {followers.map(data => (
                    <li key={data.users_following_id}>{data.username}
                    {followingIds.has(data.users_following_id) ? 
                    <button onClick={() => unFollow(data.users_following_id)}>Unfollow</button> : 
                    <button onClick={() => addFollow(data.users_following_id)}>Follow</button>}
                    </li>
                ))}
            </ul>
            : <h5>No Followers</h5>}
        </div>
    )
}


export default FollowerList;