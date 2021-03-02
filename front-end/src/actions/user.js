import axios from "axios";
import {
GET_USER,
FIND_ALL_USERS,
UPDATE_USER,
REMOVE_USER

} from "./types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/users"

export function getUserFromApi(username){
    return async function(dispatch) {
        const token = localStorage.getItem("token")
        const response = await axios({method: "GET",
                                      url: `${API_URL}/${username}`, 
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(getUser(response.data))
    }
}


function getUser(data) {
    return {
        type: GET_USER,
        data 
    }
}

export function getAllUsersFromApi(){
    return async function(dispatch) {
        const token = localStorage.getItem("token")
        const response = await axios({method: "GET",
                                      url: `${API_URL}`, 
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(findAllUsers(response.data))
    }
}


function findAllUsers(data) {
    return {
        type: FIND_ALL_USERS,
        data 
    }
}

export function updateUserFromApi(username, data){
    return async function(dispatch) {
        const token = localStorage.getItem("token")
        const response = await axios({method: "PATCH",
                                      url: `${API_URL}/${username}`, 
                                      data: data,
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(updateUser(response.data))
    }
}

function updateUser(data) {
    return {
        type: UPDATE_USER,
        data 
    }
}

export function deleteUserFromApi(username){
    return async function(dispatch) {
        const token = localStorage.getItem("token")
        const response = await axios({method: "DELETE",
                                      url: `${API_URL}/${username}`, 
                                      data: username,
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(removeUser(response.data))
    }
}

function removeUser(data) {
    return {
        type: REMOVE_USER,
        data 
    }
}