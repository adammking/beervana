import React, { useState } from "react";

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
  <div className="container">
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
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
</div>
  )

  const brewerySearchFields = (
    // <div className="Search mb-4">
    //   <form className="form-inline" onSubmit={handleSubmit}>
    //     <input
    //       className="form-control form-control-lg flex-grow-1"
    //       name="name"
    //       placeholder="Brewery name"
    //       value={search.name}
    //       onChange={handleChange}
    //     />

    //     <input
    //       className="form-control form-control-lg flex-grow-1"
    //       name="state"
    //       placeholder="State"
    //       value={search.state}
    //       onChange={handleChange}
    //     />

    //     <input
    //       className="form-control form-control-lg flex-grow-1"
    //       name="country"
    //       placeholder="Country"
    //       value={search.country}
    //       onChange={handleChange}
    //     />
    //     <button type="submit" className="btn btn-lg btn-primary">
    //       Submit
    //     </button>
    //   </form>
    // </div>
<div className="container">
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
  
  <button type="submit" className="btn btn-primary">Search</button>
</form>
</div>
  )

  


  return (
    (view) === "beers" ? beerSearchFields : brewerySearchFields
  )
}
    

export default Search;
