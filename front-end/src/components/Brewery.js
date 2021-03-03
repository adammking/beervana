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


<div id={id} className="card">
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text">{address1}</p>
    <p className="card-text">{city}</p>
    <p className="card-text">{state}</p>
    <p className="card-text">{country}</p>
    <p className="card-text">{phone}</p>
    <p className="card-text">{website}</p>
  </div>
</div>
    )
}


export default Brewery