import React from 'react';


function Post( {postId, title, body, deletePost, likes, like, unlike}) {
    
   
    function handleDelete(postId) {
        deletePost(postId);
    }

    function likePost(postId){
        like(postId)
    }

    function unlikePost(postId){
        unlike(postId)
    }

    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <div>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(postId)}>Delete Post</button>
            {likes.has(postId) ? <button className="btn btn-primary btn-sm m-2" onClick={() => unlikePost(postId)}>Unlike</button> : <button className="btn btn-primary btn-sm m-2" onClick={() => likePost(postId)}>Like</button>}
            </div>
        </div>
    )
}

export default Post;

