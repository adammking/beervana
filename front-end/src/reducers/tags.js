import { 

ADD_TAG,
DELETE_TAG

} from "../actions/types" 

const INITIAL_STATE = {}

export default function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case ADD_TAG:
            return {...state, [action.data]: action.data};

        case DELETE_TAG:
            return {...state, [action.data]: action.data};
            
        default:
            return state;
    }
}