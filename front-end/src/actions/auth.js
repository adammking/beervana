
import axios from "axios";


import { 
REGISTER_USER,
GET_TOKEN

} from "./types" 

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/auth"


export function getTokenFromApi(data){
    return async function(dispatch) {
        const response = await axios({method: "POST",
                                      url: `${API_URL}/token`, 
                                      data: data,
                                    })
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
                                      data: data,
                                    })
        return dispatch(registerUser(response.data))
    }
}

function registerUser(data) {
    return { 
        type: REGISTER_USER,
        data
    }
}



