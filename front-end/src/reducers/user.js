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
            return

        case FIND_ALL_USERS:
            return;

        case UPDATE_USER:
            return

        case REMOVE_USER:
            return;

        case ADD_FOLLOW:
            return;

        case REMOVE_FOLLOW:
            return;

        case GET_FOLLOWERS:
            return

        case GET_FOLLOWING:
            return;

        case ADD_LIKE:
            return

        case GET_LIKE_COUNT:
            return;

        case REMOVE_LIKE:
            return;

        case GET_ALL_POSTS:
            return;

        case REMOVE_USER:
            return;

        case ADD_FOLLOW:
            return;

        case ADD_POST:
            return;

        case GET_ALL_REVIEWS:
            return

        case GET_REVIEW:
            return;

        case ADD_REVIEW:
            return

        case DELETE_REVIEW:
            return;

        case ADD_TAG:
            return;

        case DELETE_TAG:
            return;
        
        default:
            return state;
    }
}