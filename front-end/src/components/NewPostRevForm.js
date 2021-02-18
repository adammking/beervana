import React from 'react';

function NewPostRevForm() {

    const [postRevData, setPostRevData] = useState({
        title,
        body
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
        <form onsubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="newpostrevform-title">Title: </label>
                <input onChange={handleChange}
                        id="newpostrevform-title"
                        name="title"
                        className="form-control"
                        value={postRevData.username}/>            
            
            </div>

            <div className="form-group">
                <label htmlFor="newpostrevform-body">Body: </label>
                <input onChange={handleChange}
                        id="newpostrevform-body"
                        name="body"
                        className="form-control"
                        value={postRevData.password}/>
            </div>

            <button>Submit</button>

        </form>
    )
    
}



export default NewPostRevForm