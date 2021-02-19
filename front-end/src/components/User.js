import React, { useEffect } from 'react';

function User({data}) {

    const {id, username, posts, reviews, followers, following } = data;
    
    const posts = posts.map(p => (<><h1>p.title</h1>
                                  <p>p.body</p></>))

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