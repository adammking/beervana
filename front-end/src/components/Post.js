import React from 'react';

function Post({data}) {
    const { id, title, body } = data;

    return (
        <div id={id}>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default Post;