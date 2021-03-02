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
<div className="card border border-3">
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{body}</p>
    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(postId)}>Delete Post</button>
    {likes.has(postId) ? <button className="btn btn-warning btn-sm m-2" onClick={() => unlikePost(postId)}>Unlike</button> : <button className="btn btn-warning btn-sm m-2" onClick={() => likePost(postId)}>Like</button>}       
  </div>
</div>
    )
}

export default Post;

