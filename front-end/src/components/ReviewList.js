import Review from "./Review";
import React, { useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserReviewsFromApi } from '../actions/reviews';
import { decode } from "jsonwebtoken"


function ReviewList() {

    const dispatch = useDispatch();
    const { username } = decode(localStorage.getItem("token"))


    useEffect(function() {
        dispatch(getUserReviewsFromApi(username))
    }, [dispatch])


    

    const reviews = useSelector(st => st.reviews.reviews);



    return (
        <div>
            <h3>Reviews:</h3>
            {reviews.length > 0 ? 
            <ul>
                {reviews.map(data => (
                    <li><Review key={data.id}data={data}/></li>
                ))}
            </ul>
            : <h5>No Reviews</h5>}
        </div>
    )
}

export default ReviewList;