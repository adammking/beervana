import React from 'react';
import Beer from "./Beer";

function BeerList(data) {
    const beers = data;

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