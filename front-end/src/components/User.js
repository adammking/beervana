import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom"
import { decode } from "jsonwebtoken"
import ReviewList from './ReviewList';
import PostList from './PostList';
import FollowerList from './FollowerList';
import FollowingList from './FollowingList';



function User() {
    const dispatch = useDispatch();
    const { username } = useParams();
    const { id } = decode(localStorage.getItem("token"))
   


    return(
        <div id={id}>
            <h1>{username}</h1>
            <div><ReviewList/></div>
            <div><PostList/></div>
            <div><FollowerList/></div>
            <div><FollowingList/></div>
        </div>
    )
};

export default User;