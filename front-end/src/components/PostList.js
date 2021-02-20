
import React, { useEffect }from "react";
import Post from "./Post"
import { useDispatch, useSelector } from "react-redux";
import { getUserPostsFromApi } from '../actions/user';

function PostList() {
    
    const dispatch = useDispatch();

    useEffect(function() {
        dispatch(getUserPostsFromApi())
    }, [dispatch])


    

    const posts = useSelector(st => st.user.posts) ;

    return (
        <div>
            <ul>
                {posts.map(data => (
                    <li><Post data={data}/></li>
                ))}
            </ul>
        </div>
    )
}

export default PostList;