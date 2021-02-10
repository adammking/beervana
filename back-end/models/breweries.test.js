"use strict";

const db = require("../db");
const { NotFoundError, BadRequestError } = require("../expressError");
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

describe("addBrewery", function() {
    test("works", async function() {
        let newBrew = await Breweries.add({name: "NewBrew1",
                                           descript: "NewDescript1", 
                                           address1: 'New test address1',
                                           city: 'NewtestCity1',
                                           state: 'NewtestState1',
                                           country: "NewCountry",
                                           phone: "NewPhone",
                                           website: null});
    expect(newBrew).toEqual({
            name: "NewBrew1",
            description: "NewDescript1", 
            address1: 'New test address1',
            city: 'NewtestCity1',
            state: 'NewtestState1',
            country: "NewCountry",
            phone: "NewPhone",
            website: null
        })
    })

    test("throws error if brewery is in db", async function() {
        try{
            let newBrew = await Breweries.add({name: "NewBrew1",
                                           descript: "NewDescript1", 
                                           address1: 'New test address1',
                                           city: 'NewtestCity1',
                                           state: 'NewtestState1',
                                           country: "NewCountry",
                                           phone: "NewPhone",
                                           website: null});
        } catch (err) {
            expect(err instanceof BadRequestError).toBeTruthy();
        }
    })

    describe("updateBrewery", function() {
    test("works for all values", async function() {
        const update = await Breweries.update("testBrew1", {name: "TestBrewUp", 
                                                            city: "TestCityUp", 
                                                            address1: "Test Address Update", 
                                                            address2: "Test Address2 Update",
                                                            state:"TestStateU", 
                                                            code: "78974",
                                                            country: "TestCountryUp",
                                                            phone: "TestPhoneUp", 
                                                            website: "testWebUp", 
                                                            descript: "TestDescript11"})
        expect(update).toEqual(
            {
                name: "TestBrewUp", 
                city: "TestCityUp", 
                address1: "Test Address Update", 
                address2: "Test Address2 Update",
                state:"TestStateU", 
                code: "78974",
                country: "TestCountryUp",
                phone: "TestPhoneUp", 
                website: "testWebUp", 
                description: "TestDescript11"
            })
    })
    })
})