import { 
REGISTER_USER,
GET_TOKEN

} from "../actions/types" 

export default function rootReducer(state={}, action) {

    switch (action.type) {
        case REGISTER_USER:
            return

        case GET_TOKEN:
            return;
        
        default:
            return state;
    }
}