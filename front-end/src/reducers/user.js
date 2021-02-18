import { 
GET_USER,
FIND_ALL_USERS, 
UPDATE_USER,
REMOVE_USER, 
ADD_FOLLOW,
REMOVE_FOLLOW,
GET_FOLLOWERS,
GET_FOLLOWING,
ADD_LIKE,
GET_LIKE_COUNT, 
REMOVE_LIKE, 
GET_ALL_POSTS,
GET_POST,
ADD_POST,
DELETE_POST,
GET_ALL_REVIEWS,
GET_REVIEW,
ADD_REVIEW,
DELETE_REVIEW,
ADD_TAG,
DELETE_TAG

} from "../actions/types" 

export default function rootReducer(state={}, action) {

    switch (action.type) {
        case GET_USER:
            return { ...state, [action.data]: action.data };

        case FIND_ALL_USERS:
            return { ...state, [action.data]: action.data };

        case UPDATE_USER:
            return {...state, [action.data]: action.data};

        case REMOVE_USER:
            return {...state, [action.data]: action.data};

        case ADD_FOLLOW:
            return {...state, [action.data]: action.data};

        case REMOVE_FOLLOW:
            return {...state, [action.data]: action.data};

        case GET_FOLLOWERS:
            return {...state, [action.data]: action.data};

        case GET_FOLLOWING:
            return {...state, [action.data]: action.data};

        case ADD_LIKE:
            return {...state, [action.data]: action.data};

        case GET_LIKE_COUNT:
            return {...state, [action.data]: action.data};

        case REMOVE_LIKE:
            return{...state, [action.data]: action.data};

        case GET_ALL_POSTS:
            return {...state, [action.data]: action.data};

        case GET_POST:
            return {...state, [action.data]: action.data};

        case ADD_FOLLOW:
            return {...state, [action.data]: action.data};

        case ADD_POST:
            return {...state, [action.data]: action.data};

        case DELETE_POST:
            return {...state, [action.data]: action.data};

        case GET_ALL_REVIEWS:
            return {...state, [action.data]: action.data};

        case GET_REVIEW:
            return {...state, [action.data]: action.data};

        case ADD_REVIEW:
            return {...state, [action.data]: action.data};

        case DELETE_REVIEW:
            return {...state, [action.data]: action.data};

        case ADD_TAG:
            return {...state, [action.data]: action.data};

        case DELETE_TAG:
            return {...state, [action.data]: action.data};
        
        default:
            return state;
    }
}