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

  static async get(name) {
    const beerRes = await db.query(
        `SELECT id, 
                name, 
                descript,
                abv
        FROM beers
        WHERE name = $1`,
        [name]
    );
    const beer = beerRes.rows[0];

    if (!beer) throw new NotFoundError(`No beer: ${name}`);

    return beer;
  }


}

class Breweries {

    /** Find all breweries (optional filter on searchFilters).
   *
   * searchFilters (all optional):
   * - state
   * - country
   * - name 
   *    (will find case-insensitive, partial matches, for all)
   *
   * Returns [{ name, id, descript AS "description", address1, city, state,
                country, phone, website  }, ...]
   * */
    static async findAll(searchFilters = {}) {
    let query = `SELECT name,
                        id,
                        descript AS "description", 
                        address1,
                        city,
                        state,
                        country,
                        phone,
                        website 
                 FROM breweries`;
    let whereExpressions = [];
    let queryValues = [];

    const { name, state, country } = searchFilters;

    // For each possible search term, add to whereExpressions and queryValues so
    // we can generate the right SQL

    if (name) {
      queryValues.push(`%${name}%`);
      whereExpressions.push(`name ILIKE $${queryValues.length}`);
    }

    if (state) {
      queryValues.push(`%${state}%`);
      whereExpressions.push(`state ILIKE $${queryValues.length}`);
    }

    if (country) {
      queryValues.push(`%${country}%`);
      whereExpressions.push(`country ILIKE $${queryValues.length}`);
    }

    if (whereExpressions.length > 0) {
      query += " WHERE " + whereExpressions.join(" AND ");
    }

    // Finalize query and return results

    query += " ORDER BY name";
    const breweriesRes = await db.query(query, queryValues);
    return breweriesRes.rows;
  }

  /** Given a brewery name, return data about brewery.
   *
   * Returns { id, name, descript, address1, city, state, country,.. }
   *   where beers is [{ name, abv, descript }, ...]
   *
   * Throws NotFoundError if not found.
   **/

  static async get(name) {
    const breweryRes = await db.query(
        `SELECT name,
                id,
                descript AS "description", 
                address1,
                city,
                state,
                country,
                phone,
                website
        FROM beers
        WHERE name = $1`,
        [name]
    );
    const brewery = breweryRes.rows[0];

    if (!brewery) throw new NotFoundError(`No beer: ${name}`);

    const breweryBeersRes = await db.query(
        `SELECT name,
                abv,
                descript
         FROM beers
         WHERE brewery_id = $1`,
         [brewery.id]
    );

    brewery.beers = breweryBeersRes.rows;

    return brewery;
  }

}

modules.exports = { Beers, Breweries};
