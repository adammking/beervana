import axios from "axios";
import {

ADD_LIKE,
GET_LIKES,
REMOVE_LIKE


} from "./types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/users"
const token = localStorage.getItem("token")

export function getLikesFromApi(username, postId){
    return async function(dispatch) {
        const token = localStorage.getItem("token")
        const response = await axios({method: "GET",
                                      url: `${API_URL}/${username}/posts/${postId}/likes`, 
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(getLikes(response.data))
    }
}

function getLikes(data) {
    return {
        type: GET_LIKES,
        data 
    }
}

export function addLikesWithApi(username, postId){
    return async function(dispatch) {
        const token = localStorage.getItem("token")
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
    return {
        type: ADD_LIKE,
        data 
    }
}


export function deleteLikesFromApi(username, postId){
    return async function(dispatch) {
        const token = localStorage.getItem("token")
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
    return {
        type: REMOVE_LIKE,
        data 
    }
}