import { 

ADD_LIKE,
GET_LIKES, 
REMOVE_LIKE, 


} from "../actions/types" 

const INITIAL_STATE = {likes: []}

export default function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case ADD_LIKE:
            return {...state, likes: [...state.likes, {...action.data.likes}]}

        case GET_LIKES:

            return {...state, likes: [...state.likes, action.data.likes]};

        case REMOVE_LIKE:
            return {...state, likes: state.likes.filter(data => data.id !== action.data.likes.id)}

        default:
            return state;
    }
}