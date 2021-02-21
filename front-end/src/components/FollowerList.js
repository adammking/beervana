import React, { useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowersFromApi } from '../actions/follows';
import { decode } from "jsonwebtoken"

function FollowerList() {
    
    const dispatch = useDispatch();
    const { username } = decode(localStorage.getItem("token"))


    useEffect(function() {
        dispatch(getFollowersFromApi(username))
    }, [dispatch])


    

    const followers = useSelector(st => st.follows.followers) ;

    return (
        <div>
            <h3>Followers:</h3>
            {followers.length > 0 ? 
            <ul>
                {followers.map(data => (
                    <li key={data.id}>{data.username}</li>
                ))}
            </ul>
            : <h5>No Followers</h5>}
        </div>
    )
}


export default FollowerList;