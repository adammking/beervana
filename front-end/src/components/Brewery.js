import React from 'react';

function Brewery() {
     const { id, 
             name, 
             descript,
             address1,
             city,
             state,
             country, 
             phone,
             website
             } = data


    return (
        <div>
            <h1>{name}</h1>
            <h4>{address1}</h4>
            <h4>{city}</h4>
            <h4>{state}</h4>
            <h4>{country}</h4>
            <h4>{phone}</h4>
            <h4>{website}</h4>
            <p>{descript}</p>
        </div>
    )
}


export default Brewery