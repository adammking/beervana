import { 
SEARCH_BREWERIES,
GET_BREWERY,
ADD_BREWERY,
UPDATE_BREWERY,
ADD_BEER_TO_BREWERY,
UPDATE_BEER_IN_BREWERY

} from "../actions/types" 

const INITIAL_STATE = { currentBrewery: { id: "", 
                                        name: "", 
                                        descript: "",
                                        address1: "",
                                        city: "",
                                        state: "",
                                        country: "", 
                                        phone: "",
                                        website: "", 
                                        beers: [] }
                        }

export default function rootReducer(state= INITIAL_STATE, action) {

    switch (action.type) {
        case SEARCH_BREWERIES:
            return {...state, breweries: [...action.data.breweries]}

        case GET_BREWERY:
            return {...state, currentBrewery: action.data.brewery};

        case ADD_BREWERY:
            return {...state, currentBrewery: action.brewery}

        case UPDATE_BREWERY:
            return {...state, [action.brewery]: action.brewery};

        case ADD_BEER_TO_BREWERY:
            return {...state, [action.brewery]: action.brewery, ...action.brewery.beers, [action.brewery.beer]: action.brewery.beer}

        case UPDATE_BEER_IN_BREWERY:
            return {...state, [action.brewery]: action.brewery, ...action.brewery.beers, [action.brewery.beer]: action.brewery.beer};
        
        default:
            return state;
    }
}