import { 

GET_USER_REVIEWS,
GET_REVIEW,
ADD_REVIEW,
DELETE_REVIEW,
LOG_OUT

} from "../actions/types" 

const INITIAL_STATE = {reviews: [],
                       currentReview: {id: "", 
                                      title: "", 
                                      body: ""}}

export default function rootReducer(state = INITIAL_STATE, action) {

switch (action.type) {

    case GET_USER_REVIEWS:
            return {...state, reviews: action.data.reviews};

        case GET_REVIEW:
            return {...state, currentReview: action.data.review};

        case ADD_REVIEW:
            return {...state, reviews: [...state.reviews, action.data.review]};

        case DELETE_REVIEW:
            const reviews = {...state.reviews}
            delete reviews[action.data.id]
            return { ...state, reviews}

        case LOG_OUT: 
            return INITIAL_STATE

        default:
            return state;
    }
}