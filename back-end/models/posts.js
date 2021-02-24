"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError")

class Posts {

    static async getUserPosts(user_id) {
        let postRes = await db.query(
            `SELECT id,
                    title,
                    body
             FROM posts
             WHERE users_id = $1`,
             [user_id]
        );

        let posts = postRes.rows ? postRes.rows : [];
        return posts;
    }

    static async getSinglePost(post_id){
        let postRes = await db.query(
            `SELECT id,
                    title,
                    body
             FROM posts
             WHERE id = $1`,
             [post_id]
        );

        let post = postRes.rows[0];

        if (!post) throw new NotFoundError('Post not found');

        return post;
    }

    static async addPost({ title, body, user_id }) {
        let postRes = await db.query(
            `INSERT INTO posts
                (title, body, users_id)
             VALUES ($1, $2, $3) 
             RETURNING title, body`, 
             [title, body, user_id]
        );

        let post = postRes.rows[0];
        return post;

    }

    static async deletePost(post_id) {
        let postRes = await db.query(
            `DELETE 
             FROM posts
             WHERE id = $1
             RETURNING id`,
             [post_id]
        );

        let delPost = postRes.rows[0];
        if (!delPost) throw new NotFoundError('Post not found');

        return `Post Deleted: ${delPost.title}`
    }


}

module.exports = Posts;