"use strict";

const db = require("../db");
const { BadRequestError } = require("../expressError");


/** Functions for follow/following */
    class Follows {

        /** 
         * Retrieves all people following user
         * 
         * Returns [{id}, ...] or empty array if no followers
         * 
         * */   
        
        static async getFollowers(userId) {

            let followersRes = await db.query(
                `SELECT users_following_id, username
                 FROM follows
                 JOIN users 
                 ON follows.users_following_id = users.id
                 WHERE users_being_followed_id = $1`,
                 [userId]
            )

            let followers = followersRes.rows ? followersRes.rows : [];
            return followers
        }

        /** 
         * Retrieves all people the current user is following
         * 
         * Returns [{id}, ...] or empty array if not following anyone
         * 
         * */ 

        static async getFollowing(userId) {

            let followingRes = await db.query(
                `SELECT users_being_followed_id, username
                 FROM follows
                 JOIN users
                 ON follows.users_being_followed_id = users.id
                 WHERE users_following_id = $1`,
                 [userId]
            )
            let following = followingRes.rows ? followingRes.rows : []

            return following
        }

        /** 
         * Adds a following relationship between two users
         * 
         * Takes id of current user and id of user to be followed
         * 
         * Returns the id of the person who is now being followed by user
         * 
         * */ 

        static async addFollows(userId, followingId) {
            if (userId === followingId) return new BadRequestError("Can not follow yourself")
            let precheckRes = await db.query(
                `SELECT users_being_followed_id,
                        users_following_id
                 FROM follows
                 WHERE users_being_followed_id = $1
                 AND users_following_id = $2`,
                 [followingId, userId]
            )
            let precheck = precheckRes.rows
            if (precheck.length > 0) return new BadRequestError("Duplicate Relation")

            let followRes = await db.query(
                `INSERT INTO follows
                            (users_being_followed_id, 
                             users_following_id)
                  VALUES ($1, $2)
                  RETURNING  users_being_followed_id`,
                  [followingId, userId]
            );
            let follow = followRes.rows[0]
            return follow                 
        }

        /** 
         * Removes a following relationship between two users
         * 
         * Takes id of current user and id of user no longer being followed
         * 
         * Returns the id of the person who is no longer being followed
         * 
         * */ 

        static async stopFollowing(userId, followingId) {
            if (userId === followingId) return new BadRequestError("Can not follow or unfollow yourself")
            
            let unfollowRes = await db.query(
                `DELETE 
                 FROM follows
                 WHERE users_being_followed_id = $1
                 AND users_following_id = $2
                 RETURNING users_being_followed_id`,
                  [followingId, userId]
            );

            let unfollow = unfollowRes.rows[0]
            return unfollow                 
        }

    }

module.exports = Follows;