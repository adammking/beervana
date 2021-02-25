import axios from "axios";
import {

ADD_LIKE,
GET_LIKE_COUNT,
REMOVE_LIKE


} from "./types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/users"
const token = localStorage.getItem("token")

export function getLikesFromApi(username, postId){
    return async function(dispatch) {
        const response = await axios({method: "GET",
                                      url: `${API_URL}/${username}/posts/${postId}/likes`, 
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(getLikeCount(response.data))
    }
}

function getLikeCount(data) {
        console.log(data)
    return {
        type: GET_LIKE_COUNT,
        data 
    }
}

export function addLikesWithApi(username, postId){
    return async function(dispatch) {
        const response = await axios({method: "POST",
                                      url: `${API_URL}/${username}/posts/${postId}/likes`, 
                                      data: {},
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(addLike(response.data))
    }
}

function addLike(data) {
        console.log(data)
    return {
        type: ADD_LIKE,
        data 
    }
}


export function deleteLikesFromApi(username, postId){
    return async function(dispatch) {
        const response = await axios({method: "DELETE",
                                      url: `${API_URL}/${username}/posts/${postId}/likes`, 
                                      data: {},
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(removeLike(response.data))
    }
}


function removeLike(data) {
    console.log(data)
    return {
        type: REMOVE_LIKE,
        data 
    }
}