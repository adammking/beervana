import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { decode } from "jsonwebtoken"
import { getUserFromApi, 
         getFollowersFromApi, 
         getFollowingFromApi, 
         getUserPostsFromApi,
        getUserReviewsFromApi } from "../actions/user"

function User() {
    const dispatch = useDispatch();
    const { id, username } = decode(localStorage.getItem("token"))

    dispatch(getUserFromApi(username))
    dispatch(getFollowersFromApi(username))
    dispatch(getFollowingFromApi(username))
    dispatch(getUserPostsFromApi(username))
    dispatch(getUserReviewsFromApi(username))

    const followers = useSelector(st => st.user.currentUser.followers, shallowEqual)
    const following = useSelector(st => st.user.currentUser.following, shallowEqual)
    const posts = useSelector(st => st.user.currentUser.posts, shallowEqual)
    const reviews = useSelector(st => st.user.currentUser.reviews, shallowEqual)


    return(
        <div id={id}>
            <h1>{username}</h1>
            <h4>{posts}</h4>
            <h4>{reviews}</h4>
            <h4>{followers}</h4>
            <h4>{following}</h4>
        </div>
    )
};

export default User;