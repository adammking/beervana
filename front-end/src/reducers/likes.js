import { 

ADD_LIKE,
GET_LIKE_COUNT, 
REMOVE_LIKE, 


} from "../actions/types" 

const INITIAL_STATE = { count: 0 }

export default function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

    case ADD_LIKE:
            return {...state, count: state.count + 1}

        case GET_LIKE_COUNT:
            return {...state, count: action.data};

        case REMOVE_LIKE:
            return {...state, count: state.count - 1}

        default:
            return state;
    }
}