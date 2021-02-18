import React from 'react';
import Beer from "./Beer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function BeerList() {

    const dispatch = useDispatch();



    const beers = useSelector(st => st.beers) ;

    return (
        <div>
            <ul>
                {beers.map(data => (
                    <li><Beer data={data}/></li>
                ))}
            </ul>
        </div>
    )
}

export default BeerList