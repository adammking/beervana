
import React, { useEffect, useState }from "react";
import Post from "./Post"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getUserPostsFromApi, addPostWithApi, deletePostsFromApi } from '../actions/posts';
import { addLikesWithApi, getLikesFromApi, deleteLikesFromApi } from '../actions/likes';
import { decode } from "jsonwebtoken"
import NewPostRevForm from "./NewPostRevForm"

function PostList() {

    const [addView, setAddView] = useState(false);

    
    const dispatch = useDispatch();
    const { username, id } = decode(localStorage.getItem("token"))
    const posts = useSelector(st => st.posts.posts);
    const likes = useSelector(st => st.likes.likes)
    const likeSet = new Set()
    likes.forEach(post => likeSet.add(post.posts_id))

    const addFields = (<>
        <NewPostRevForm add={addPost}/> 
        </>)

    function toggleForm() {
        setAddView(!addView);
    }

    function addPost(data) {
        dispatch(addPostWithApi(username, data))
    }

    function deletePost(id) {
        dispatch(deletePostsFromApi(username, id))
    }

    useEffect(function() {
        dispatch(getUserPostsFromApi(username))
    }, [dispatch, posts.length])


    useEffect(function() {
        dispatch(getLikesFromApi((username, postId))
    }, [dispatch, likes.length])



    function like(postId) {
        dispatch(addLikesWithApi(username, postId))
        dispatch(getLikesFromApi(username, postId))

    }

    function unlike(postId) {
        dispatch(deleteLikesFromApi(username, postId))
        dispatch(getLikesFromApi(username, postId))
    }

    

    return (
        <div>
            <h3>Posts:</h3>
            <button onClick={toggleForm}>{addView ? "Cancel" : "Add Post"}</button>
            {addView ? addFields : <div></div>}

            {posts.length > 0 ? 
            <ul>
                {posts.map(data => (
                    <li key={data.id}><Post deletePost={() => deletePost(data.id)} 
                                            title={data.title} 
                                            body={data.body} 
                                            postId={data.id} 
                                            likes={likeSet}
                                            like={like}
                                            unlike={unlike}/></li>
                ))}
            </ul>
            : <h5>No Posts</h5>}
        </div>
    )
}


export default PostList;