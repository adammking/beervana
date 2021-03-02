import { 

ADD_LIKE,
GET_LIKES, 
REMOVE_LIKE, 
LOG_OUT


} from "../actions/types" 

const INITIAL_STATE = {likes: []}

export default function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case ADD_LIKE:
            return {...state, likes: [...state.likes, {...action.data.likes}]}

        case GET_LIKES:

            return {...state, likes: action.data.likes};

        case REMOVE_LIKE:
            return {...state, likes: state.likes.filter(data => data.id !== action.data.likes.id)}

        case LOG_OUT: 
            return INITIAL_STATE

        default:
            return state;
    }
}