import React from 'react';

function User({data}) {

    const {id, username, posts, reviews, followers, following } = data;
    

    return(
        <div id={id}>
            <h1>{username}</h1>
            <h4>{posts}</h4>
            <h4>{reviews}</h4>
            <h4>{followers}</h4>
            <h4>{following}</h4>
        </div>
    )
};

export default User;