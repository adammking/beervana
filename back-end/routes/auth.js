"use strict";

/** Routes for authentication. */

const jsonschema = require("jsonschema");

const Users = require("../models/users");
const express = require("express");
const router = new express.Router();
const { createToken } = require("../helpers/tokens");
const userAuthSchema = require("../schemas/userAuth.json");
const userNewSchema = require("../schemas/userNew.json");
const { BadRequestError } = require("../expressError");

/** POST /auth/token:  { username, password } => { token }
 *
 * Returns JWT token which can be used to authenticate further requests.
 *
 * Authorization required: none
 */

 router.post("/token", async function(req, res, next) {
     try {
        const validator = jsonschema.validate(req.body, userAuthSchema)
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const { username, password } = req.body;
        const user = await Users.authenticate(username, password);
        const token = createToken(user)
        return res.json({ token })
     } catch (err) {
         return next(err);
     }
 })

 /** POST /auth/register:   { user } => { token }
 *
 * user must include { username, password, firstName, lastName }
 *
 * Returns JWT token which can be used to authenticate further requests.
 *
 * Authorization required: none
 */

 router.post("/register", async function(req, res, next) {
    try { 
        const validator = jsonschema.validate(req.body, userNewSchema)
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const newUser = await Users.register(req.body);
        const token = createToken(newUser)
        return res.json({ token })
    } catch (err) {
        return next(err);
    };
 });

module.exports = router;