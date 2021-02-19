import React from 'react';

function NewBeerForm() {

    const [beerData, setBeerData] = useState({
        name: "", 
        brewery_id: `${breweryName}`, 
        abv: "", 
        ibu: "", 
        descript: ""
    });

    function handleChange(evt) {
        const {name, value} = evt.target;
        setBeerData(data => ({
        ...data,
        [name]: value
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        add(beerData);
    }


    return (
        <form onsubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="newbeerform-name">Name: </label>
                <input onChange={handleChange}
                        id="newbeerform-name"
                        name="name"
                        className="form-control"
                        value={beerData.name}/>            
            
            </div>

            <div className="form-group">
                <label htmlFor="newbeerform-abv">ABV: </label>
                <input onChange={handleChange}
                        id="newbeerform-abv"
                        name="abv"
                        className="form-control"
                        value={beerData.abv}/>
            </div>

             <div className="form-group">
                <label htmlFor="newbeerform-ibu">IBU: </label>
                <input onChange={handleChange}
                        id="newbeerform-ibu"
                        name="ibu"
                        className="form-control"
                        value={beerData.ibu}/>
            </div>

             <div className="form-group">
                <label htmlFor="newbeerform-descript">Description: </label>
                <input onChange={handleChange}
                        id="newbeerform-descript"
                        name="descript"
                        className="form-control"
                        value={beerData.descript}/>
            </div>

            <button>Login</button>

        </form>
    )
    
}

export default NewBeerForm;