import { 
REGISTER_USER,
GET_TOKEN

} from "../actions/types" 

export default function rootReducer(state={}, action) {

    switch (action.type) {
        case REGISTER_USER:
            return state;

        case GET_TOKEN:
            return state;
        
        default:
            return state;
    }
}