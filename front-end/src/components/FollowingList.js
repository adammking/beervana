import React, { useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowingFromApi } from '../actions/follows';
import { decode } from "jsonwebtoken"

function FollowingList() {
    
    const dispatch = useDispatch();
    const { username } = decode(localStorage.getItem("token"))


    useEffect(function() {
        dispatch(getFollowingFromApi(username))
    }, [dispatch])


    const following = useSelector(st => st.follows.following) ;

    return (
        <div>
            <h3>Following:</h3>
            {following.length > 0 ? 
            <ul>
                {following.map(data => (
                    <li key={data.id}>{data.username}</li>
                ))}
            </ul>
            : <h5>Not Following</h5>}
        </div>
    )
}


export default FollowingList;