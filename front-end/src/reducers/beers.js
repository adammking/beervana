import { 
SEARCH_BEERS,
GET_BEER

} from "../actions/types" 

export default function rootReducer(state = { beers: [] }, action) {

    switch (action.type) {
        case SEARCH_BEERS:
            return {...state, beers: action.data.beers}

        case GET_BEER:
            return{...state, [action.beer]: action.beer};
        
        default:
            return state;
    }
}