import React from 'react';

function Beer({data}) {
    const { id, name, brewery, ibu, abv, description } = data


    return (

<div id={id} className="card">
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">IBU: {ibu}</li>
    <li className="list-group-item">ABV: {abv}</li>
  </ul>
</div>


    )
}

export default Beer;