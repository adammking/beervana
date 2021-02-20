import { 

GET_USER_REVIEWS,
GET_REVIEW,
ADD_REVIEW,
DELETE_REVIEW

} from "../actions/types" 

const INITIAL_STATE = {}

export default function rootReducer(state = INITIAL_STATE, action) {

switch (action.type) {

case GET_USER_REVIEWS:
            return {...state, reviews: [action.data]};

        case GET_REVIEW:
            return {...state, review: action.data};

        case ADD_REVIEW:
            return {...state, posts: [...state, action.data]};

        case DELETE_REVIEW:
            return {...state, [action.data]: action.data};

        default:
            return state;
    }
}