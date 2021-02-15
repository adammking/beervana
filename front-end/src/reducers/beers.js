import { 
SEARCH_BEERS,
GET_BEER

} from "../actions/types" 

export default function rootReducer(state={}, action) {

    switch (action.type) {
        case SEARCH_BEERS:
            return

        case GET_BEER:
            return;
        
        default:
            return state;
    }
}