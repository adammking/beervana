import { 
REGISTER_USER,
GET_TOKEN

} from "../actions/types" 

export default function rootReducer(state={token}, action) {

    switch (action.type) {
        case REGISTER_USER:
            return {...state, token: action.data.token};

        case GET_TOKEN:
            return {...state, token: action.data.token};
        
        default:
            return state;
    }
}