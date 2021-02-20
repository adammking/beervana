import axios from "axios";
import {

GET_USER_POSTS,
GET_POST,
ADD_POST,
DELETE_POST,


} from "./types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/users"
const token = localStorage.getItem("token")

export function getUserPostsFromApi(username){
    return async function(dispatch) {
        const response = await axios({method: "GET",
                                      url: `${API_URL}/${username}/posts`, 
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(getAllPosts(response.data))
    }
}


function getAllPosts(data){
    return {
        type: GET_USER_POSTS,
        data
    }
}

export function getSinglePostFromApi(username, postId){
    return async function(dispatch) {
        const response = await axios({method: "GET",
                                      url: `${API_URL}/${username}/posts/${postId}`, 
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(getPost(response.data))
    }
}

function getPost(data){
    return {
        type: GET_POST,
        data
    }
}

export function addPostWithApi(username, data){
    return async function(dispatch) {
        const response = await axios({method: "POST",
                                      url: `${API_URL}/${username}/posts`, 
                                      data: data,
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(addPost(response.data))
    }
}

function addPost(data){
    return {
        type: ADD_POST,
        data
    }
}

export function deletePostsFromApi(username, postId, data){
    return async function(dispatch) {
        const response = await axios({method: "DELETE",
                                      url: `${API_URL}/${username}/posts/${postId}/likes`, 
                                      data: data,
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(deletePost(response.data))
    }
}

function deletePost(data){
    return {
        type: DELETE_POST,
        data
    }
}