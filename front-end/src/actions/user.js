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

function addFollow() {
    return {
        type: ADD_FOLLOW,
        data 
    }
}

function removeFollow() {
    return {
        type: REMOVE_FOLLOW,
        data 
    }
}

function getFollowing() {
    return {
        type: GET_FOLLOWING,
        data 
    }
}

function getFollowers() {
    return {
        type: GET_FOLLOWERS,
        data 
    }
}

function addLike() {
    return {
        type: ADD_LIKE,
        data 
    }
}




