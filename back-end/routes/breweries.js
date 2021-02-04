
"use strict";

/** Routes for users. */

const jsonschema = require("jsonschema")
const express = require("express");
const { ensureLoggedIn } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const Breweries = require("../models/breweries");
const brewerySearchSchema = require("../schemas/brewerySearch")
const router = new express.Router();

router.get("/", ensureLoggedIn, async function(req, res, next) {
    
    const q = req.query;
    try {
        const validator = jsonschema.validate(q, brewerySearchSchema)
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const breweries = await Breweries.findAll(q)
        return res.json({ breweries })
    } catch (err) {
        return next(err);
    }
});

router.get("/:id", ensureLoggedIn, async function(req, res, next) {
    try {
        const brewery = await Breweries.get(req.params.id)
        return res.json({ brewery })
    } catch (err) {
        return next(err);
    }
});

module.exports = router;