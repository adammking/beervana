import React, { useState } from "react";
import "./Search.css"

function Search({ searchFor, view }) {
  const [search, setSearch] = useState({
    name: "", 
    state: "",
    country: "", 
  });


  function handleSubmit(evt) {
    evt.preventDefault();
    let data;

    if (view === "beers") {
      // these fields aren't req'd---pass "", not empty string
       data = {
        name:  search.name
      };

    } else {
      // these fields aren't req'd---pass "", not empty string
       data = {
        name: search.name,
        state: search.state,
        country: search.country
      };
    }
    setSearch(data)
    searchFor(search);
  }

  function handleChange(evt) {
    const {name, value} = evt.target;
    setSearch(info => ({...info, [name]: value }));
  }

  const beerSearchFields = (
  <div id="beer-search" className="container mt-2">
  <form onSubmit={handleSubmit}> 

  <div className="mb-3">
    <input id="searchform-name" 
           onChange={handleChange} 
           aria-describedby="name" 
           name="name" 
           className="form-control" 
           value={search.name} 
           placeholder="Beer name"/>
  </div>
        <button type="submit" className="btn btn-warning">
          Search
        </button>
      </form>
</div>
  )

  const brewerySearchFields = (
    
<div  id="brewery-search"className="container mt-2">
  <form onSubmit={handleSubmit}> 

  <div className="mb-3">
    <input id="searchform-name" 
           onChange={handleChange} 
           aria-describedby="name" 
           name="name" 
           className="form-control" 
           value={search.name} 
           placeholder="Brewery name"/>
  </div>

  <div className="mb-3">
    <input id="searchform-state" 
           onChange={handleChange} 
           aria-describedby="state" 
           name="state"
           className="form-control" 
           value={search.state} 
           placeholder="State"/>
  </div>

   <div className="mb-3">
    <input id="searchform-country" 
           onChange={handleChange} 
           aria-describedby="country" 
           name="country" 
           className="form-control" 
           value={search.country} 
           placeholder="Country"/>
  </div>
  
  <button type="submit" className="btn btn-warning">Search</button>
</form>
</div>
  )

  


  return (
    (view) === "beers" ? beerSearchFields : brewerySearchFields
  )
}
    

export default Search;
