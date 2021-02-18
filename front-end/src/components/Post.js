import React from 'react';

function Post(data) {
    const { title, body } = data;

    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default Post;