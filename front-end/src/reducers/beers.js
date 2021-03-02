import { 
SEARCH_BEERS,
GET_BEER, 
LOG_OUT

} from "../actions/types" 

const INITIAL_STATE = { beers: [], 
                        currentBeer: {id: "", 
                                      name: "", 
                                      abv: "",
                                      description: ""} 
                      }

export default function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case SEARCH_BEERS:
            return {...state, beers: action.data.beers}

        case GET_BEER:
            return{...state, currentBeer: action.data.beer};

        case LOG_OUT: 
            return INITIAL_STATE
        
        default:
            return state;
    }
}