import React, {useState} from 'react';

function NewPostRevForm({add}) {

    const [postRevData, setPostRevData] = useState({
        title: "",
        body: ""
    });

    

    function handleChange(evt) {
        const {name, value} = evt.target;
        setPostRevData(data => ({
        ...data,
        [name]: value
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        add(postRevData);
    }


    return (
        <form onSubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="newpostrevform-title">Title: </label>
                <input onChange={handleChange}
                        id="newpostrevform-title"
                        name="title"
                        className="form-control"
                        value={postRevData.title}/>            
            
            </div>

            <div className="form-group">
                <label htmlFor="newpostrevform-body">Body: </label>
                <input onChange={handleChange}
                        id="newpostrevform-body"
                        name="body"
                        className="form-control"
                        value={postRevData.body}/>
            </div>

            <button className="btn btn-warning m-2">Submit</button>

        </form>
    )
    
}



export default NewPostRevForm