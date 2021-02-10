
"use strict";

/** Routes for users. */

const jsonschema = require("jsonschema")
const express = require("express");
const { ensureLoggedIn } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const Breweries = require("../models/breweries");
const brewerySearchSchema = require("../schemas/brewerySearch")
const newBrewerySchema = require("../schemas/breweryNew")
const breweryUpdateSchema = require("../schemas/breweryUpdate")
const newBeerSchema = require("../schemas/beerNew")
const beerUpdateSchema = require("../schemas/beerUpdate.json")
const router = new express.Router();

/**Routes for Breweries */

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

router.post("/", ensureLoggedIn, async function(req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, newBrewerySchema)
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const newBrewery = await Breweries.add(req.body)
        return res.json(newBrewery)
    } catch (err) {
        return next(err)
    }
})

router.patch("/:id", ensureLoggedIn, async function(req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, breweryUpdateSchema)
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const updatedBrewery = await Breweries.update(req.params.id, req.body)
        return res.json(updatedBrewery)
    } catch (err) {
        return next(err)
    }
})

/**Routes for adding and updating beers (can only be done through brewery pages) */

router.post("/:id/beers", ensureLoggedIn, async function(req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, beerUpdateSchema)
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const newBreweryBeer = await Breweries.addBeer(req.params.id, req.body)
        return res.json(newBreweryBeer)
    } catch (err) {
        return next(err)
    }
})

router.patch("/:id/beers/:beername", ensureLoggedIn, async function(req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, updateBeerSchema)
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const updatedBreweryBeer = await Breweries.updateBeer(req.params.id, req.body)
        return res.json(updatedBreweryBeer)
    } catch (err) {
        return next(err)
    }
})

module.exports = router;