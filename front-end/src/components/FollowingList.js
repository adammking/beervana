import React, { useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowingFromApi, deleteFollowFromApi } from '../actions/follows';
import { decode } from "jsonwebtoken"

function FollowingList({username}) {
    
    const dispatch = useDispatch();
    const following = useSelector(st => st.follows.following) ;

    useEffect(function() {
        dispatch(getFollowingFromApi(username))
    }, [dispatch])

    function unFollow(id) {
        dispatch(deleteFollowFromApi(username, id))
        dispatch(getFollowingFromApi(username))
    }



    return (
        <div>
            <h3>Following:</h3>
            {following.length > 0 ? 
            <ul className="list-group">
                {following.map(data => (
                    <li className="list-group-item" key={data.users_being_followed_id}>{data.username}
                    <button className="btn btn-warning btn-sm m-2" onClick={() => unFollow(data.users_being_followed_id)}>Unfollow</button>
                    </li>
                ))}
            </ul>
            : <h5>Not Following</h5>}
        </div>
    )
}


export default FollowingList;