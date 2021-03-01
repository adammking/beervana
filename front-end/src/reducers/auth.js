import { 
REGISTER_USER,
GET_TOKEN,
LOG_OUT,
} from "../actions/types" 

const INITIAL_STATE = { token: "", authenticated: false}

export default function rootReducer(state = INITIAL_STATE, action) { 


    switch (action.type) {

    case REGISTER_USER:
        return {...state, token: action.data.token, 
                          authenticated: true};

    case GET_TOKEN:
        return {...state, token: action.data.token, 
                          authenticated: true};

    case LOG_OUT: 
        return INITIAL_STATE

    default:
        return state
    }

}