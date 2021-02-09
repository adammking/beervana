"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError");
const Beers = require("./beers");

const {
    commonBeforeAll,
    commonBeforeEach,
    commonAfterEach,
    commonAfterAll,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);


describe("findAll beers", function () {
    test("works: all", async function() {
        let beers = await Beers.findAll();
        expect(beers).toEqual([
            {
                id: expect.any(Number),
                name: "testBeer1",
                abv: null,
                description: "Descrip1"
            },
            {
                id: expect.any(Number),
                name: "testBeer2",
                abv: null,
                description: "Descrip2"
            }

        ])
    })

    test("works: by name", async function() {
        let beers = await Beers.findAll({ name: "testBeer1" })
        expect(beers).toEqual([
            {
                id: expect.any(Number),
                name: "testBeer1",
                abv: null,
                description: "Descrip1"
            }
        ])
    });

    test("throws error if beer not found", async function() {
        try {
            let beers = await Beers.findAll({ name: "flabbergasted" })
        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        }
    });
});

describe("find single beer", function() {
    test("works", async function() {
        let beers = await Beers.findAll();
        let beer = await Beers.get(beers[0].id)
        expect(beer).toEqual({
                id: expect.any(Number),
                name: "testBeer1",
                abv: null,
                description: "Descrip1"
        })

        let beer1 = await Beers.get(beers[1].id)
        expect(beer1).toEqual({
                id: expect.any(Number),
                name: "testBeer2",
                abv: null,
                description: "Descrip2"
        })
    })

    test("throws error if beer not found", async function() {
        try{
            let beer = await Beers.get(-1);
        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        }
    })
})