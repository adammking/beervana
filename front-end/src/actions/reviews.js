import axios from "axios";
import {

GET_USER_REVIEWS,
GET_REVIEW,
ADD_REVIEW,
DELETE_REVIEW

} from "./types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/users"

export function getUserReviewsFromApi(username){
    return async function(dispatch) {
        const token = localStorage.getItem("token")
        const response = await axios({method: "GET",
                                      url: `${API_URL}/${username}/reviews`, 
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(getAllReviews(response.data))
    }
}

function getAllReviews(data){
    return {
        type: GET_USER_REVIEWS,
        data
    }
}

export function getSingleReviewFromApi(username, reviewId){
    return async function(dispatch) {
        const token = localStorage.getItem("token")
        const response = await axios({method: "GET",
                                      url: `${API_URL}/${username}/posts/${reviewId}`, 
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(getReview(response.data))
    }
}

function getReview(data){
    return {
        type: GET_REVIEW,
        data
    }
}

export function addReviewWithApi(username, data){
    return async function(dispatch) {
        const token = localStorage.getItem("token")
        const response = await axios({method: "POST",
                                      url: `${API_URL}/${username}/reviews`, 
                                      data: data,
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(addReview(response.data))
    }
}

function addReview(data){
    return {
        type: ADD_REVIEW,
        data
    }
}

export function deleteReviewsFromApi(username, reviewId, data){
    return async function(dispatch) {
        const token = localStorage.getItem("token")
        const response = await axios({method: "DELETE",
                                      url: `${API_URL}/${username}/reviews/${reviewId}`, 
                                      data: data,
                                      headers: {
                                        Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(deleteReview(response.data))
    }
}

function deleteReview(data){
    return {
        type: DELETE_REVIEW,
        data
    }
}