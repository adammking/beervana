"use strict";

const db = require("../db");
const { NotFoundError, BadRequestError, UnauthorizedError } = require("../expressError");
const Users = require("./users");

const {
    commonBeforeAll,
    commonBeforeEach,
    commonAfterEach,
    commonAfterAll,
    testUserIds,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);


describe("authenticate", function() {
    test("works", async function () {
        const user = await Users.authenticate("u1", "password1");
        expect(user).toEqual({
            id: expect.any(Number),
            username: "u1",
            firstName: "U1F",
            lastName: "U1L"
        })
    })

    test("throws unauthorized error for incorrect username", async function () {
        try {
            const user = await Users.authenticate("bozo", "password1");
        } catch (err) {
            expect(err instanceof UnauthorizedError).toBeTruthy();
        }
    })

    test("throws unauthorized error for incorrect password", async function () {
        try {
            const user = await Users.authenticate("u1", "bozo");
        } catch (err) {
            expect(err instanceof UnauthorizedError).toBeTruthy();
        }
    })

})

describe("register", function () {
    test("works", async function () {
        const newUser = await Users.register({username: "testUser", 
                                             password: "testPass", 
                                             firstName: "TestFirst", 
                                             lastName: "TestLast"});
        expect(newUser).toEqual({
            id: expect.any(Number),
            username: "testUser",
            firstName: "TestFirst",
            lastName: "TestLast"
        })
    })

    test("throws bad request error if username is already taken", async function() {
        try {
            const user = await Users.register("u1", "testPass", "TestFirst", "TestLast");
        } catch (err) {
            expect(err instanceof BadRequestError)
        }
    })
})

// describe("findAll", function() {

// })

// describe("get", function() {
    
// })

// describe("update", function() {
    
// })

// describe("delete", function() {
    
// })