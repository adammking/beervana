import React, { useEffect } from 'react';
import Beer from "./Beer";
import { useDispatch, useSelector } from "react-redux";
import { searchBeersFromApi } from '../actions/beers';
import Search from "./Search"

function BeerList() {

    const dispatch = useDispatch();

    

    function search(search) {
        dispatch(searchBeersFromApi(search));
    }
    

    const beers = useSelector(st => st.beers) ;

    return (
        <div>
            <Search searchFor={search} view={beers}/>
            <ul>
                {beers.map(data => (
                    <li><Beer data={data}/></li>
                ))}
            </ul>
        </div>
    )
}

export default BeerList