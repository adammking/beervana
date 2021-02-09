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

describe("findAll", function() {
    test("works", async function() {
        const users = await Users.findAll()
        expect(users).toEqual([
            {
                id: expect.any(Number),
                username: "u1",
                firstName: "U1F",
                lastName: "U1L"
            },
            {
                id: expect.any(Number),
                username: "u2",
                firstName: "U2F",
                lastName: "U2L"
            }
        ])
    })
})

describe("get", function() {
    test("works", async function () {
        const user = await Users.get("u1")
        expect(user).toEqual({
                id: expect.any(Number),
                username: "u1",
                firstName: "U1F",
                lastName: "U1L"
        })
    })

    test("throws not found error for invalid user", async function () {
        try {
            const user = await Users.get("fail")
        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        }
    })
})

describe("update", function() {
    test("works for all values", async function() {
        const update = await Users.update("u1", {username: "U1", firstName: "u1f", lastName: "u1l"})
        expect(update).toEqual(
            {
                username: "U1", 
                firstName: "u1f", 
                lastName: "u1l"
            })
    })

    test("works for username only", async function() {
        const update = await Users.update("u1", {username: "U1"})
        expect(update).toEqual(
            {
                username: "U1", 
                firstName: "U1F", 
                lastName: "U1L"
            })
    })

    test("works for firstname only", async function() {
        const update = await Users.update("u1", {firstName: "u1f"})
        expect(update).toEqual(
            {
                username: "u1", 
                firstName: "u1f", 
                lastName: "U1L"
            })
    })

    test("works for lastname only", async function() {
        const update = await Users.update("u1", { lastName: "u1l"})
        expect(update).toEqual(
            {
                username: "u1", 
                firstName: "U1F", 
                lastName: "u1l"
            })
    })

    test("throws not found error for invalid user", async function () {
        try {
            const user = await Users.update("fail", {username: "pass"})
        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        }
    })
    
})

describe("delete", function() {
    test("works", async function () {
        const user = await Users.remove("u1")
        expect(user).toEqual("Deleted: u1")
    })

     test("throws not found error for invalid user", async function () {
        try {
            const user = await Users.remove("fail")
        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        }
    })
})