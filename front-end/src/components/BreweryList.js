import Brewery from "./Brewery";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { searchBreweriesFromApi } from '../actions/brewery';
import Search from "./Search"

function BreweryList() {

    const dispatch = useDispatch();
    
    
    function search(search) {
        dispatch(searchBreweriesFromApi(search));
    }
    

    const breweries = useSelector(st => st.brewery.breweries) ;


    return (
        <div>
            <Search searchFor={search} view={"breweries"}/>
        </div>
    )
}


export default BreweryList;