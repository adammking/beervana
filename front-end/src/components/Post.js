import React from 'react';

function Post( {id, title, body, deletePost}) {

    function handleDelete() {
        deletePost(id);
    }

    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handleDelete}>Remove Post</button>
        </div>
    )
}

export default Post;