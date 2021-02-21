import { 

ADD_FOLLOW,
REMOVE_FOLLOW,
GET_FOLLOWERS,
GET_FOLLOWING,


} from "../actions/types" 

const INITIAL_STATE = {followers: [], 
                       following: []}

export default function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

    case ADD_FOLLOW:
            return {...state, following: [...state.following, action.data.follower]};

        case REMOVE_FOLLOW:
            return { ...state, following: state.following.filter(follow => follow.id !== action.data.id)}

        case GET_FOLLOWERS:
            return {...state, followers: action.data.followers};

        case GET_FOLLOWING:
            return {...state, following: action.data.following};

        default:
            return state;
    }
}