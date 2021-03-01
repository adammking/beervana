import React from 'react';
import Beer from "./Beer";
import { useDispatch, useSelector } from "react-redux";
import { searchBeersFromApi } from '../actions/beers';
import Search from "./Search"

function BeerList() {

    const dispatch = useDispatch();
    const beers = useSelector(st => st.beers.beers) ;

    

    function search(search) {
        dispatch(searchBeersFromApi(search));
    }
    

    return (
        <div>
            <Search searchFor={search} view={"beers"}/>
            {beers ? 
            <ul className="list-group">
                {beers.map(data => (
                    <li className="list-group-item" key={data.id}><Beer data={data}/></li>
                ))}
            </ul> : <h2>Search Beers</h2>}
        </div>
    )
}

export default BeerList