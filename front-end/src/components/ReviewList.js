
import React, { useEffect, useState }from "react";
import Review from "./Review"
import { useDispatch, useSelector } from "react-redux";
import { getUserReviewsFromApi, addReviewWithApi, deleteReviewsFromApi } from '../actions/reviews';
import { decode } from "jsonwebtoken"
import NewPostRevForm from "./NewPostRevForm"
import './ReviewList.css'


function ReviewList({username}) {

    const [addView, setAddView] = useState(false);

    
    const dispatch = useDispatch();
    const reviews = useSelector(st => st.reviews.reviews);

    const addFields = (<>
        <NewPostRevForm add={addReview}/> 
        </>)

    function toggleForm() {
        setAddView(!addView);
    }

    function addReview(data) {
        dispatch(addReviewWithApi(username, data))
    }

    function deleteReview(id) {
        dispatch(deleteReviewsFromApi(username, id))
    }

    useEffect(function() {
        dispatch(getUserReviewsFromApi(username))
    }, [dispatch, reviews.length])

    

    return (
        <div>
            <h3>Reviews:</h3>
            <button className="btn btn-warning btn-sm" onClick={toggleForm}>{addView ? "Cancel" : "Add Review"}</button>
            {addView ? addFields : <div></div>}

            {reviews.length > 0 ? 
            <ul className="list-group">
                {reviews.map(data => (
                    <li className="list-group-item m-2" key={data.id}><Review deleteReview={() => deleteReview(data.id)} title={data.title} body={data.body}/></li>
                ))}
            </ul>
            : <h5>No Reviews</h5>}
        </div>
    )
}


export default ReviewList;