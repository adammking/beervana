import React from "react"

function UpdateBeerForm() {

    const [beerData, setBeerData] = useState({
        name, 
        brewery_id: `${breweryName}`, 
        abv, 
        ibu, 
        descript
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
                <label htmlFor="updatebeerform-name">Name: </label>
                <input onChange={handleChange}
                        id="updatebeerform-name"
                        name="name"
                        className="form-control"
                        value={beerData.name}/>            
            
            </div>

            <div className="form-group">
                <label htmlFor="updatebeerform-abv">ABV: </label>
                <input onChange={handleChange}
                        id="updatebeerform-abv"
                        name="abv"
                        className="form-control"
                        value={beerData.abv}/>
            </div>

             <div className="form-group">
                <label htmlFor="updatebeerform-ibu">IBU: </label>
                <input onChange={handleChange}
                        id="updatebeerform-ibu"
                        name="ibu"
                        className="form-control"
                        value={beerData.ibu}/>
            </div>

             <div className="form-group">
                <label htmlFor="updatebeerform-descript">Description: </label>
                <input onChange={handleChange}
                        id="updatebeerform-descript"
                        name="descript"
                        className="form-control"
                        value={beerData.descript}/>
            </div>

            <button>Submit</button>

        </form>
    )
    
}

export default UpdateBeerForm;