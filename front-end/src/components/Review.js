import React from 'react';

function Review( {id, title, body, deleteReview}) {

    function handleDelete() {
        deleteReview(id);
    }

    return (

<div className="card border border-3">
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{body}</p>
    <button className="btn btn-warning btn-sm m-2" onClick={handleDelete}>Remove Review</button>
  </div>
</div>
    )
}

export default Review;