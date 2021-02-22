import React from 'react';

function Review( {id, title, body, deleteReview}) {

    function handleDelete() {
        deleteReview(id);
    }

    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handleDelete}>Remove Review</button>
        </div>
    )
}

export default Review;