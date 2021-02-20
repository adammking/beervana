import axios from "axios";
import {

ADD_TAG,
DELETE_TAG

} from "./types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/users"
const token = localStorage.getItem("token")

export function addTagWithApi(username, data){
    return async function(dispatch) {
        const response = await axios({method: "POST",
                                      url: `${API_URL}/${username}/tags`, 
                                      data: data,
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(addTag(response.data))
    }
}

function addTag(data){
    return {
        type: ADD_TAG,
        data
    }
}

export function deleteTagsFromApi(username, tagId, data){
    return async function(dispatch) {
        const response = await axios({method: "DELETE",
                                      url: `${API_URL}/${username}/tags/${tagId}`, 
                                      data: data,
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(deleteTag(response.data))
    }
}

function deleteTag(data){
    return {
        type: DELETE_TAG,
        data
    }
}