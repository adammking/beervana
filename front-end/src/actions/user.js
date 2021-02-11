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
    return asycn function(dispatch) {
        const response = await axios({method: "GET",
                                      url: `${API_URL}/${username}`, 
                                      headers: {
                                          Authorization: 'Bearer' + token
                                      }})
    }
}


function getUser(username) {
    return {
        type: GET_USER,
        data 
    }
}

function findAllUsers(username) {
    return {
        type: FIND_ALL_USERS,
        data 
    }
}

function updateUser(username, data) {
    return {
        type: UPDATE_USER,
        data 
    }
}

function removeUser(username) {
    return {
        type: REMOVE_USER,
        data 
    }
}

function addFollow(userId, followId) {
    return {
        type: ADD_FOLLOW,
        data 
    }
}

function removeFollow(userId, followId) {
    return {
        type: REMOVE_FOLLOW,
        data 
    }
}

function getFollowing(userId) {
    return {
        type: GET_FOLLOWING,
        data 
    }
}

function getFollowers(userId) {
    return {
        type: GET_FOLLOWERS,
        data 
    }
}

function addLike(postId) {
    return {
        type: ADD_LIKE,
        data 
    }
}

function getLikeCount(postId) {
    return {
        type: GET_LIKE_COUNT,
        data 
    }
}

function removeLike(postId) {
    return {
        type: REMOVE_LIKE,
        data 
    }
}

function getAllPosts(){
    return {
        type: GET_ALL_POSTS,
        data
    }
}

function getPost(postId){
    return {
        type: GET_POST,
        data
    }
}

function addPost(){
    return {
        type: ADD_POST,
        data
    }
}

function deletePost(){
    return {
        type: DELETE_POST,
        data
    }
}

function getAllReviews(){
    return {
        type: GET_ALL_REVIEWS,
        data
    }
}

function getAllReviews(reviewId){
    return {
        type: GET_REVIEW,
        data
    }
}

function addReview(data){
    return {
        type: ADD_REVIEW,
        data
    }
}


function deleteReview(reviewId){
    return {
        type: DELETE_REVIEW,
        data
    }
}

function addTag(data){
    return {
        type: ADD_TAG,
        data
    }
}

function deleteTag(tagId){
    return {
        type: DELETE_TAG,
        data
    }
}
