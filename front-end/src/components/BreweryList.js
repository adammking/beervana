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
            <div>
            <Search searchFor={search} view={"breweries"}/>
            {breweries ? 
            <ul>
                {breweries.map(data => (
                    <li key={data.id}><Brewery data={data}/></li>
                ))}
            </ul> : <h2>Search Breweries</h2>}
        </div>
        </div>
    )
}


export default BreweryList;