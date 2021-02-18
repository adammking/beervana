import React from 'react';
import Brewery from "./Brewery";

function BreweryList() {
    const breweries = data;

    return (
        <div>
            <ul>
                {breweries.map(data => (
                    <li><Brewery data={data}/></li>
                ))}
            </ul>
        </div>
    )
}


export default BreweryList;