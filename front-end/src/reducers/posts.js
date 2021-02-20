import { 

GET_USER_POSTS,
GET_POST,
ADD_POST,
DELETE_POST,


} from "../actions/types" 

const INITIAL_STATE = {}

export default function rootReducer(state = INITIAL_STATE, action) {

switch (action.type) {

case GET_USER_POSTS:
            return {...state, posts: [...action.data]};

        case GET_POST:
            return {...state, post: action.data};

        case ADD_POST:
            return {...state, posts: [action.data]};

        case DELETE_POST:
            return {...state, [action.data]: action.data};

        default:
            return state;
    }
}