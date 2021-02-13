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
GET_ALL_POSTS,
GET_POST,
ADD_POST,
DELETE_POST,
GET_ALL_REVIEWS,
GET_REVIEW,
ADD_REVIEW,
DELETE_REVIEW,
ADD_TAG,
DELETE_TAG

} from "./types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/users"

export function getUserFromApi(username){
    return async function(dispatch) {
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
        const response = await axios({method: "DELETE",
                                      url: `${API_URL}/${username}`, 
                                      data: data,
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


export function getLikesFromApi(postId){
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
    return {
        type: GET_LIKE_COUNT,
        data 
    }
}

export function addLikesWithApi(username, postId){
    return async function(dispatch) {
        const response = await axios({method: "POST",
                                      url: `${API_URL}/${username}/posts/${postId}/likes`, 
                                      data: data,
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


export function deleteLikesFromApi(username, data){
    return async function(dispatch) {
        const response = await axios({method: "DELETE",
                                      url: `${API_URL}/${username}/posts/${postId}/likes`, 
                                      data: data,
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


export function getAllPostsFromApi(username){
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
        type: GET_ALL_POSTS,
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

export function deletePostsFromApi(username, postId){
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

export function getAllReviewsFromApi(username){
    return async function(dispatch) {
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
        type: GET_ALL_REVIEWS,
        data
    }
}

export function getSingleReviewFromApi(username, reviewId){
    return async function(dispatch) {
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

export function deletePostsFromApi(username, reviewId){
    return async function(dispatch) {
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

export function deletePostsFromApi(username, tagId){
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
