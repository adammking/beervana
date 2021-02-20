import { 

ADD_LIKE,
GET_LIKE_COUNT, 
REMOVE_LIKE, 


} from "../actions/types" 

const INITIAL_STATE = {}

export default function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

    case ADD_LIKE:
            return {...state, [action.data]: action.data};

        case GET_LIKE_COUNT:
            return {...state, [action.data]: action.data};

        case REMOVE_LIKE:
            return{...state};

        default:
            return state;
    }
}