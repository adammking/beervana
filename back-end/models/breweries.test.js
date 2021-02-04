"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError");
const Breweries = require("./breweries");

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


describe("findAll breweries", function () {
    test("works: all", async function() {
        let beers = await Breweries.findAll();
        expect(beers).toEqual([
            {
                name: "testBrew1",
                id: expect.any(Number),
                description: "Descrip1", 
                address1: 'test address1',
                city: 'testCity1',
                state: 'testState1',
                country: null,
                phone: null,
                website: null
            },
            {
                name: "testBrew2",
                id: expect.any(Number),
                description: "Descrip2", 
                address1: 'test address 2',
                city: 'testCity2',
                state: 'testState2',
                country: null,
                phone: null,
                website: null
            }

        ])
    })

    test("works: by name", async function() {
        let beers = await Breweries.findAll({ name: "testBrew1" })
        expect(beers).toEqual([
            {
                name: "testBrew1",
                id: expect.any(Number),
                description: "Descrip1", 
                address1: 'test address1',
                city: 'testCity1',
                state: 'testState1',
                country: null,
                phone: null,
                website: null
            }
        ])
    });

    test("works: by state", async function() {
        let beers = await Breweries.findAll({ state: "testState1" })
        expect(beers).toEqual([
            {
                name: "testBrew1",
                id: expect.any(Number),
                description: "Descrip1", 
                address1: 'test address1',
                city: 'testCity1',
                state: 'testState1',
                country: null,
                phone: null,
                website: null
            }
        ])
    });

    test("works: by country and state", async function() {
        let beers = await Breweries.findAll({ state: "testState2", country: null })
        expect(beers).toEqual([
            {
                name: "testBrew2",
                id: expect.any(Number),
                description: "Descrip2", 
                address1: 'test address 2',
                city: 'testCity2',
                state: 'testState2',
                country: null,
                phone: null,
                website: null
            }
        ])
    });

    test("throws error if brewery not found", async function() {
        try {
            let brewery = await Breweries.findAll({ name: "flabbergasted" })
        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        }
    });
});

describe("find single brewery", function() {
    test("works", async function() {
        let breweries = await Breweries.findAll();
        let brewery = await Breweries.get(breweries[0].id)
        expect(brewery).toEqual({
                name: "testBrew1",
                id: expect.any(Number),
                description: "Descrip1", 
                address1: 'test address1',
                city: 'testCity1',
                state: 'testState1',
                country: null,
                phone: null,
                website: null,
                beers: [expect.any(Object)]
        })

        let brewery1 = await Breweries.get(breweries[1].id)
        expect(brewery1).toEqual({
                name: "testBrew2",
                id: expect.any(Number),
                description: "Descrip2", 
                address1: 'test address 2',
                city: 'testCity2',
                state: 'testState2',
                country: null,
                phone: null,
                website: null,
                beers: [expect.any(Object)]
        })
    })

    test("throws error if beer not found", async function() {
        try{
            let brewery = await Breweries.get(-1);
        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        }
    })
})