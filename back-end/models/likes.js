"use strict";

const db = require("../db");
const { NotFoundError, BadRequestError } = require("../expressError")

class Likes {

    static async getLikes(post_id) {
        let likeRes = await db.query(
            `SELECT COUNT(*)
             FROM likes
             WHERE posts_id = $1`,
             [post_id]
        )

        let likeCount = likeRes.rows[0]
        return likeCount
    }

    static async addLike({ post_id, user_id }) {
        let preCheck = await db.query(
            `SELECT id
             FROM likes
             WHERE posts_id = $1 
             AND users_id = $2`,
             [post_id, user_id]
        )

        if (preCheck.rows[0]) throw new BadRequestError("Post already liked")
        
        let likeRes = await db.query(
            `INSERT INTO likes
                (posts_id, users_id)
             VALUES ($1, $2) 
             RETURNING posts_id`, 
             [post_id, user_id]
        )
            let like = likeRes.rows[0];
            return like;

        

    }

    static async deleteLike({ post_id, user_id }) {
        let likeRes = await db.query(
            `DELETE 
             FROM likes
             WHERE posts_id = $1 
             AND users_id = $2
             RETURNING likes.id`,
             [post_id, user_id]
        );

        let delLike = likeRes.rows[0];
        if (!delLike) throw new NotFoundError('Post not found');
        return delLike
    }


}

module.exports = Likes;