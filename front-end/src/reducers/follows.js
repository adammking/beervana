import { 

ADD_FOLLOW,
REMOVE_FOLLOW,
GET_FOLLOWERS,
GET_FOLLOWING,


} from "../actions/types" 

const INITIAL_STATE = {}

export default function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

    case ADD_FOLLOW:
            return {...state, [action.data]: action.data};

        case REMOVE_FOLLOW:
            return {...state, [action.data]: action.data};

        case GET_FOLLOWERS:
            return {...state, currentUser: {following: [...action.data]}};

        case GET_FOLLOWING:
            return {...state, currentUser: action.data};

        default:
            return state;
    }
}