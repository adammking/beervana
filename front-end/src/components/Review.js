import React from 'react';

function Review({data}) {

    const { title, body } = data;

    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}



export default Review;