import { 

ADD_TAG,
DELETE_TAG

} from "../actions/types" 

const INITIAL_STATE = {tags: []}

export default function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case ADD_TAG:
            return {...state, tags: [...state.tags, action.data]};

        case DELETE_TAG:
            return { ...state, tags: state.tags.filter(tag => tag.id !== action.data.id)}

        default:
            return state;
    }
}