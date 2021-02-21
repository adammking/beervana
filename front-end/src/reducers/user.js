import { 

GET_USER,
FIND_ALL_USERS, 
UPDATE_USER,
REMOVE_USER

} from "../actions/types" 

const INITIAL_STATE = {currentUser: {}, 
                        users: []}

export default function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case GET_USER:
            return { ...state, currentUser: action.data.user};

        case FIND_ALL_USERS:
            return { ...state, userList: action.data.users };

        case UPDATE_USER:
            return {...state, currentUser: {...state.currentUser, ...action.data}};

        case REMOVE_USER:
            return { ...state, users: state.users.filter(user => user.id !== action.data.id)}

        default:
            return state;
    }
}