"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError")

class Tags {

    static async addTag({type, user_id}) {
        let tagRes = await db.query(
            `INSERT INTO Tags
                (type, users_id)
             VALUES ($1, $2) 
             RETURNING type`, 
             [type, user_id]
        );

        let tag = tagRes.rows[0];
        return tag;

    }

    static async deleteTag(tag_id, user_id) {
        let tagRes = await db.query(
            `DELETE 
             FROM likes
             WHERE id = $1
             AND users_id = $2
             RETURNING id`,
             [tag_id, user_id]
        );

        let delRes = tagRes.rows[0];
        if (!delRes) throw new NotFoundError('Tag not found');
    }


}

module.exports = Tags;