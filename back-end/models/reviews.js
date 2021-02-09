"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError")

class Reviews {

    static async getUserReviews(user_id) {
        let reviewsRes = await db.query(
            `SELECT id,
                    title,
                    body
             FROM reviews
             WHERE users_id = $1`,
             [user_id]
        );

        let reviews = reviewsRes.rows ? reviewsRes.rows : [];
        return reviews;
    }

    static async getSingleReview(review_id){
        let reviewsRes = await db.query(
            `SELECT id,
                    title,
                    body
             FROM reviews
             WHERE id = $1`,
             [review_id]
        );

        let review = reviewsRes.rows[0];

        if (!review) throw new NotFoundError('Post not found');

        return review;
    }

    static async addReview({title, body, user_id}) {
        let reviewsRes = await db.query(
            `INSERT INTO reviews
                (title, body, users_id)
             VALUES ($1, $2, $3) 
             RETURNING title, body`, 
             [title, body, user_id]
        );

        let review = reviewsRes.rows[0];
        return review;

    }

    static async deleteReview(post_id) {
        let reviewsRes = await db.query(
            `DELETE 
             FROM reviews
             WHERE id = $1
             RETURNING title`,
             [post_id]
        );

        let delReview = reviewsRes.rows[0];
        if (!delReview) throw new NotFoundError('Review not found');

        return `Review Deleted: ${delReview.title}`
    }


}

module.exports = Reviews;