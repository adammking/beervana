import React from 'react';

function Review( {id, title, body, deleteReview}) {

    function handleDelete() {
        deleteReview(id);
    }

    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <button className="btn btn-primary btn-sm m-2" onClick={handleDelete}>Remove Review</button>
        </div>
    )
}

export default Review;