
import axios from "axios";


import { 
SEARCH_BEERS,
GET_BEER

} from "./types" 

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/beers"


export function getBeerFromApi(id){
    return async function(dispatch) {
        const response = await axios({method: "GET",
                                      url: `${API_URL}/${id}`, 
                                      headers: {
                                          Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(getBeer(response.data))
    }
}


function getBeer(data) {
    return {
        type: GET_BEER,
        data 
    }
}

export function searchBeersFromApi(data){
    return async function(dispatch) {
        const response = await axios({method: "GET",
                                      url: `${API_URL}/`, 
                                      params: data,
                                      headers: {
                                          Authorization: `Bearer ${token}` 
                                      }})
        return dispatch(searchBeers(response.data))
    }
}


function searchBeers(data) {
    return {
        type: SEARCH_BEERS,
        data 
    }
}