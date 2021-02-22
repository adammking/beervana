import { 

GET_USER_POSTS,
GET_POST,
ADD_POST,
DELETE_POST,


} from "../actions/types" 

const INITIAL_STATE = {posts: [],
                       currentPost: {id: "", 
                                      title: "", 
                                      body: ""}}

export default function rootReducer(state = INITIAL_STATE, action) {

switch (action.type) {

    case GET_USER_POSTS:
            return {...state, posts: action.data.posts};

        case GET_POST:
            return {...state, currentPost: action.data.post};

        case ADD_POST:
            return {...state, posts: [...state.posts, {...action.data.post}]};

        case DELETE_POST:
            const posts = {...state.posts}
            delete posts[action.data.id]
            return { ...state, posts}

        default:
            return state;
    }
}