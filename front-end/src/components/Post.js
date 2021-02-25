import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { addLikesWithApi, getLikesFromApi, deleteLikesFromApi } from '../actions/likes';
import {decode} from "jsonwebtoken"

function Post( {postId, title, body, deletePost}) {
    const dispatch = useDispatch()
    const likeCount = useSelector(st => st.likes.count)
    const likeInfo = useSelector(st => st.likes.likes)
    const {username, id } = decode(localStorage.getItem("token"))
    const likeIds = new Set()
    likeInfo.forEach(data => likeIds.add(data.users_id))
    console.log(likeInfo)




    function handleDelete() {
        deletePost(postId);
    }

    useEffect(function() {
        dispatch(getLikesFromApi(username, postId))
    }, [dispatch, likeIds.size])


    function like() {
        dispatch(addLikesWithApi(username, postId))
        dispatch(getLikesFromApi(username, postId))

    }

    function unlike() {
        dispatch(deleteLikesFromApi(username, postId))
        dispatch(getLikesFromApi(username, postId))


    }



    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <div>
            <button onClick={() => handleDelete(postId)}>Delete Post</button>
            {likeIds.has(id) ? <button onClick={unlike}>Unlike</button> : <button onClick={like}>Like</button>}
            {likeCount > 0 ? <aside>{likeCount}</aside> : <></>}
            </div>
        </div>
    )
}

export default Post;

