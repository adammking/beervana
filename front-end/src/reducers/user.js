import { 
    
GET_USER,
FIND_ALL_USERS, 
UPDATE_USER,
REMOVE_USER

} from "../actions/types" 

const INITIAL_STATE = {}

export default function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case GET_USER:
            return { ...state, currentUser: action.data};

        case FIND_ALL_USERS:
            return { ...state, userList: [...state, action.data] };

        case UPDATE_USER:
            return {...state, user: action.data};

        case REMOVE_USER:
            return {...state, [action.data]: action.data};

        default:
            return state;
    }
}