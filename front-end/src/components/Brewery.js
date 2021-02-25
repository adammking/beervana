import React from 'react';

function Brewery({data}) {
     const { id, 
             name, 
             description,
             address1,
             city,
             state,
             country, 
             phone,
             website
             } = data


    return (
        <div id={id}>
            <h1>{name}</h1>
            <h4>{address1}</h4>
            <h4>{city}</h4>
            <h4>{state}</h4>
            <h4>{country}</h4>
            <h4>{phone}</h4>
            <h4>{website}</h4>
            <p>{description}</p>
        </div>
    )
}


export default Brewery