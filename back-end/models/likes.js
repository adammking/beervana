"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError")

class Likes {

    static async addLike({ post_id, user_id }) {
        let likeRes = await db.query(
            `INSERT INTO likes
                (posts_id, users_id)
             VALUES ($1, $2) 
             RETURNING posts_id`, 
             [post_id, user_id]
        );

        let like = likeRes.rows[0];
        return like;

    }

    static async deleteLike(like_id) {
        let likeRes = await db.query(
            `DELETE 
             FROM likes
             WHERE id = $1
             RETURNING id`,
             [like_id]
        );

        let delLike = likeRes.rows[0];
        if (!delLike) throw new NotFoundError('Post not found');
    }


}

module.exports = Likes;