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
    

    const breweries = useSelector(st => st.breweries) ;

    return (
        <div>
            <Search searchFor={search} view={"breweries"}/>
            <ul>
                {breweries.map(data => (
                    <li><Brewery data={data}/></li>
                ))}
            </ul>
        </div>
    )
}


export default BreweryList;