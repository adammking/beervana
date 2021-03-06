import {decode} from "jsonwebtoken"
import axios from "axios";



import { 
REGISTER_USER,
GET_TOKEN,
LOG_OUT

} from "./types" 

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/auth"


export function getTokenFromApi(data){
    return async function(dispatch) {
        
        const response = await axios({method: "POST",
                                      url: `${API_URL}/token`, 
                                      data: {username: data.username, 
                                             password: data.password},
                                    })
        localStorage.setItem("token", response.data.token)
        const { username } = localStorage.getItem("token")
        localStorage.setItem("username", username)
        return dispatch(getToken(response.data))
    }
}

function getToken(data) {

    return { 
        type: GET_TOKEN,
        data
    }
}

export function registerUserWithApi(data){
    return async function(dispatch) {
        const response = await axios({method: "POST",
                                      url: `${API_URL}/register`, 
                                      data: {username: data.username, 
                                             password: data.password,
                                             firstName: data.firstName,
                                             lastName: data.lastName},
                                    })
                                            
        localStorage.setItem("token", response.data.token)
        const { username } = localStorage.getItem("token")
        localStorage.setItem("username", username)
        return dispatch(registerUser(response.data))
    }
}

function registerUser(data) {
    return { 
        type: REGISTER_USER,
        data
    }
}

export function logout() {
    return {
        type: LOG_OUT
    }
}





