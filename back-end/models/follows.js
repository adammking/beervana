"use strict";

const db = require = require("../db");
const { NotFoundError, UnauthorizedError } = require("../expressError")


/** Functions for follow/following */
    class Follows {

        /** 
         * Retrieves all people following user
         * 
         * Returns [{id}, ...] or empty array if no followers
         * 
         * */   
        
        static async getFollowers(id) {

            let followersRes = await db.query(
                `SELECT users_following_id
                 FROM follows
                 WHERE users_being_followed_id = $1`,
                 [id]
            )

            let followers = followersRes.rows ? followersRes.rows : []

            return followers
        }

        /** 
         * Retrieves all people the current user is following
         * 
         * Returns [{id}, ...] or empty array if not following anyone
         * 
         * */ 

        static async getFollowing(id) {

            let followingRes = await db.query(
                `SELECT users_being_followed_id
                 FROM follows
                 WHERE users_following_id = $1`,
                 [id]
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

        static async addFollows(followedId, followingId) {
            if (followedId === followingId) return

            let followRes = await db.query(
                `INSERT INTO follows
                            (users_being_followed_id, 
                             users_following_id)
                  VALUES ($1, $2)
                  RETURNING  users_being_followed_id`,
                  [followedId, followingId]
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

        static async stopFollowing(followedId, followingId) {
            if (followedId === followingId) return
            
            let unfollowRes = await db.query(
                `DELETE 
                 FROM follows
                 WHERE users_being_followed_id = $1
                 AND users_following_id = $2
                 RETURNING users_being_followed_id`,
                  [followedId, followingId]
            );

            let unfollow = unfollowRes.rows[0]
            return unfollow                 
        }

    }

module.exports = Follows;