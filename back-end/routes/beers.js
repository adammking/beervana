"use strict";

/** Routes for beers. */

const jsonschema = require("jsonschema")
const express = require("express");
const { ensureLoggedIn } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const Beers = require("../models/beers");
const beerSearchSchema = require("../schemas/beerSearch")
const router = new express.Router();

router.get("/", ensureLoggedIn, async function(req, res, next) {
    
    const q = req.query;
    try {
        const validator = jsonschema.validate(q, beerSearchSchema)
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const beers = await Beers.findAll(q)
        return res.json({ beers })
    } catch (err) {
        return next(err);
    }
});

router.get("/:id", ensureLoggedIn, async function(req, res, next) {
    try {
        const beer = await Beers.get(req.params.id)
        console.log(req.params.id)
        return res.json({ beer })
    } catch (err) {
        return next(err);
    }
});

module.exports = router;