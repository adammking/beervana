"use strict";

const db = require("../db");
const {
    NotFoundError, BadRequestError 
} = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");



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
  };

  /** Given a brewery name, return data about brewery.
   *
   * Returns { id, name, descript, address1, city, state, country,.. }
   *   where beers is [{ name, abv, descript }, ...]
   *
   * Throws NotFoundError if not found.
   **/

  static async get(id) {
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
        FROM breweries
        WHERE id = $1`,
        [id]
    );
    const brewery = breweryRes.rows[0];
    if (!brewery) throw new NotFoundError(`Brewery not found`);

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
  };

  static async add({ name, city, address1, state, 
                             country, phone, website, descript}) {
  let precheckRes = await db.query(
    `SELECT name
     FROM breweries
     WHERE name = $1`,
     [name]
  )

  if (!precheckRes.rows.length === 0) return new BadRequestError(`Brewery Exists: ${name}`)
  
  let newBrewRes = await db.query(
    `INSERT INTO breweries (name, city, address1, state,
                             country, phone, website, descript)
     VALUES ($1, $2, $3, $4, 
             $5, $6, $7, $8)
     RETURNING name, city, address1, state, 
               country, phone, website, descript AS "description"`,
    [name, city, address1, state, country, phone, website, descript]
  )
  let newBrew = newBrewRes.rows[0]
  return newBrew
};


  static async update(id, data) {
     const { setCols, values } = sqlForPartialUpdate(
                 data,
                 {  
                  description: "descript" });
            
            const idVarIdx = "$" + (values.length + 1);

            const querySql = `UPDATE breweries
                              SET ${setCols}
                              WHERE id = ${idVarIdx}
                              RETURNING name, city, address1, address2, state, 
               country, code, phone, website, descript AS "description"`

            const result = await db.query(querySql, [...values, id]);
            const brewery = result.rows[0];

            if (!brewery) throw new NotFoundError(`No Brewery: ${id}`);

            return brewery
    }



  static async addBeer(breweryId, { name, brewery_id, abv, ibu, descript }) {
  let brewInfo = await db.query(
    `SELECT id, name
     FROM breweries
     WHERE id = $1`,
     [breweryId]
  )

  brewery_id =  brewInfor.res.rows[0].id
  let newBeerRes = await db.query(
    `INSERT INTO beers (name, brewery_id, abv, ibu, descript)
     VALUES ($1, $2, $3, $4, 
             $5)
     RETURNING name, abv, ibu, descript`,
    [name, brewery_id, abv, ibu, descript]
  )
  let newBeer = newBeerRes.rows[0]
  return newBeer
};

static async updateBeer(name, data) {
     const { setCols, values } = sqlForPartialUpdate(
                 data,
                 {  
                  description: "descript" });
            
            const nameVarIdx = "$" + (values.length + 1);

            const querySql = `UPDATE beers
                              SET ${setCols}
                              WHERE name = ${nameVarIdx}
                              RETURNING name, abv, ibu, descript AS "description"`

            const result = await db.query(querySql, [...values, name]);
            const beer = result.rows[0];

            if (!beer) throw new NotFoundError(`No Beer: ${name}`);

            return beer
    }
};


module.exports = Breweries;