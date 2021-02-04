"use strict";

const db = require("../db");
const {
    NotFoundError 
} = require("../expressError");

class Beers {

    static async findAll(searchFilters = {}) {
    let query = `SELECT name,
                        id,
                        descript AS "description", 
                        abv 
                 FROM beers`;
    let whereExpressions = [];
    let queryValues = [];

    const { name } = searchFilters;

    // For each possible search term, add to whereExpressions and queryValues so
    // we can generate the right SQL

    if (name) {
      queryValues.push(`%${name}%`);
      whereExpressions.push(`name ILIKE $${queryValues.length}`);
    }

    if (whereExpressions.length > 0) {
      query += " WHERE " + whereExpressions.join(" AND ");
    }

    // Finalize query and return results

    query += " ORDER BY name";
    const beersRes = await db.query(query, queryValues);
    return beersRes.rows;
  }

  static async get(id) {
    const beerRes = await db.query(`SELECT id, name, descript AS "description", abv FROM beers WHERE id = $1`,[id]);
    const beer = beerRes.rows[0];

    if (!beer) throw new NotFoundError(`Beer not found`);

    return beer;
  }


}



module.exports = Beers;
