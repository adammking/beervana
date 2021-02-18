import React from 'react';

function Beer({data}) {
    const { name, brewery, ibu, abv, descript } = data


    return (
        <div>
            <h1>{name}</h1>
            <aside>{brewery}</aside>
            <h4>{ibu}</h4>
            <h4>{abv}</h4>
            <p>{descript}</p>
        </div>
    )
}

export default Beer;