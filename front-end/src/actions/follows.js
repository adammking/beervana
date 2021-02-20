import axios from "axios";
import {
GET_USER,
FIND_ALL_USERS,
UPDATE_USER,
REMOVE_USER,
ADD_FOLLOW,
REMOVE_FOLLOW,
GET_FOLLOWERS,
GET_FOLLOWING,
ADD_LIKE,
GET_LIKE_COUNT,
REMOVE_LIKE,
GET_USER_POSTS,
GET_POST,
ADD_POST,
DELETE_POST,
GET_USER_REVIEWS,
GET_REVIEW,
ADD_REVIEW,
DELETE_REVIEW,
ADD_TAG,
DELETE_TAG

} from "./types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/users"
const token = localStorage.getItem("token")


export function getFollowersFromApi(username){
    return async function(dispatch) {
        const response = await axios({method: "GET",
                                      url: `${API_URL}/${username}/followers`, 
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(getFollowers(response.data))
    }
}

function getFollowers(data) {
    return {
        type: GET_FOLLOWERS,
        data 
    }
}

export function getFollowingFromApi(username){
    return async function(dispatch) {
        const response = await axios({method: "GET",
                                      url: `${API_URL}/${username}/following`, 
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(getFollowing(response.data))
    }
}

function getFollowing(data) {
    return {
        type: GET_FOLLOWING,
        data 
    }
}

export function addFollowWithApi(username, data){
    return async function(dispatch) {
        const response = await axios({method: "POST",
                                      url: `${API_URL}/${username}/follow`, 
                                      data: data,
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(addFollow(response.data))
    }
}

function addFollow(data) {
    return {
        type: ADD_FOLLOW,
        data 
    }
}

export function deleteFollowFromApi(username, data){
    return async function(dispatch) {
        const response = await axios({method: "DELETE",
                                      url: `${API_URL}/${username}/follow`, 
                                      data: data,
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(removeFollow(response.data))
    }
}

function removeFollow(data) {
    return {
        type: REMOVE_FOLLOW,
        data 
    }
}