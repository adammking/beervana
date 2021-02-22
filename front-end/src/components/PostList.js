
import React, { useEffect, useState }from "react";
import Post from "./Post"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getUserPostsFromApi, addPostWithApi, deletePostsFromApi } from '../actions/posts';
import { decode } from "jsonwebtoken"
import NewPostRevForm from "./NewPostRevForm"

function PostList() {

    const [addView, setAddView] = useState(false);

    
    const dispatch = useDispatch();
    const { username } = decode(localStorage.getItem("token"))
    const posts = useSelector(st => st.posts.posts);

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

    

    return (
        <div>
            <h3>Posts:</h3>
            <button onClick={toggleForm}>{addView ? "Cancel" : "Add Post"}</button>
            {addView ? addFields : <div></div>}

            {posts.length > 0 ? 
            <ul>
                {posts.map(data => (
                    <li key={data.id}><Post deletePost={() => deletePost(data.id)} title={data.title} body={data.body}/></li>
                ))}
            </ul>
            : <h5>No Posts</h5>}
        </div>
    )
}


export default PostList;