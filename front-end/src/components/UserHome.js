import React from 'react';
import { useParams, useHistory } from "react-router-dom"
import {useDispatch} from "react-redux"
import ReviewList from './ReviewList';
import PostList from './PostList';
import FollowerList from './FollowerList';
import FollowingList from './FollowingList';
import { logout } from '../actions/auth'
import './UserHome.css'



function UserHome() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { username } = useParams();
   
function userLogOut() {
    dispatch(logout())
    localStorage.setItem("token", null)
    history.push("/login")
}

    return(
        

<div className="container">
    <h1>{username}</h1>
    <aside><button onClick={userLogOut} className="btn btn-danger">Logout</button></aside>
    <div className="row">
    <div className="col-sm">
      <FollowerList/>
    </div>
    <div className="col-sm">
      <FollowingList/>
    </div>
  </div>
  <div className="row">
    <div className="col-sm">
      <ReviewList/>
    </div>
    <div className="col-sm">
      <PostList/>
    </div>
  </div>
  
</div>
    )
};

export default UserHome;