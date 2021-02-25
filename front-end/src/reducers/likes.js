import { 

ADD_LIKE,
GET_LIKE_COUNT, 
REMOVE_LIKE, 


} from "../actions/types" 

const INITIAL_STATE = { count: 0, 
                        likes: [] }

export default function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

    case ADD_LIKE:
        return {...state, likes: [...state.likes, {...action.data.likes}]}

        case GET_LIKE_COUNT:
            return {...state, ...action.data};

        case REMOVE_LIKE:
            return {...state, likes: state.likes.filter(data => data.id !== action.data.likes.id)}

        default:
            return state;
    }
}