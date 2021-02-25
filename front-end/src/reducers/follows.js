import { 

ADD_FOLLOW,
REMOVE_FOLLOW,
GET_FOLLOWERS,
GET_FOLLOWING,


} from "../actions/types" 

const INITIAL_STATE = {followers: [], 
                       following: []
                      }

export default function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

    case ADD_FOLLOW:
            return {...state, following: [...state.following, {...action.data.newFollow}]};

        case REMOVE_FOLLOW:
            let newFollowing = state.following.filter(data => data.id !== action.data.delFollow.users_being_followed_id)
            
            return { ...state, following: newFollowing}


        case GET_FOLLOWERS:
            return {...state, followers: action.data.followers};

        case GET_FOLLOWING:
            return {...state, following: action.data.following};

        default:
            return state;
    }
}