import Review from "./Review";
import React, { useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserReviewsFromApi } from '../actions/user';


function ReviewList() {

    const dispatch = useDispatch();

    useEffect(function() {
        dispatch(getUserReviewsFromApi())
    }, [dispatch])


    

    const reviews = useSelector(st => st.user.reviews) ;

    return (
        <div>
            <ul>
                {reviews.map(data => (
                    <li><Review data={data}/></li>
                ))}
            </ul>
        </div>
    )
}

export default ReviewList;