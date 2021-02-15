import { 
SEARCH_BREWERIES,
GET_BREWERY,
ADD_BREWERY,
UPDATE_BREWERY,
ADD_BEER_TO_BREWERY,
UPDATE_BEER_IN_BREWERY

} from "../actions/types" 

export default function rootReducer(state={}, action) {

    switch (action.type) {
        case SEARCH_BREWERIES:
            return

        case GET_BREWERY:
            return;

        case ADD_BREWERY:
            return

        case UPDATE_BREWERY:
            return;

        case ADD_BEER_TO_BREWERY:
            return

        case UPDATE_BEER_IN_BREWERY:
            return;
        
        default:
            return state;
    }
}