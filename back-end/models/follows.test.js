"use strict";

const db = require("../db");
const { BadRequestError } = require("../expressError");
const Follows = require("./follows");


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


describe("getFollowers", function(){
    test("gets all current users followers", async function(){
        let follow = await Follows.addFollows(testUserIds[0], testUserIds[1])
        let followers = await Follows.getFollowers(testUserIds[1])
        expect(followers.length).toEqual(1)
        expect(followers).toEqual([{users_following_id: expect.any(Number)}])
    })

    test("returns empty array if no followers", async function(){
        let followers = await Follows.getFollowers(testUserIds[0])

        expect(followers.length).toEqual(0)
        expect(followers).toEqual([])
    })
})

describe("getFollowing", function(){
    test("gets all users the current user is following", async function(){
        let follow = await Follows.addFollows(testUserIds[0], testUserIds[1])
        let following = await Follows.getFollowing(testUserIds[0])
        expect(following.length).toEqual(1)
    })

    test("returns empty array if no followers", async function(){
        let following = await Follows.getFollowing(testUserIds[0])
        
        expect(following.length).toEqual(0)
        expect(following).toEqual([])
    })
})

describe("addFollows", function(){
    test("allows current user to follow others", async function(){
        let follow = await Follows.addFollows(testUserIds[0], testUserIds[1])
        let following = await Follows.getFollowing(testUserIds[0])
        expect(following.length).toEqual(1)
        expect(following).toEqual([{ users_being_followed_id: expect.any(Number)}])
    });

    test("returns empty array if no followers", async function(){
        let following = await Follows.getFollowing(testUserIds[0])
        
        expect(following.length).toEqual(0)
        expect(following).toEqual([])
    });

    test("throws bad request error if user tries to follow themselves", async function () {
        try {
            let follow = await Follows.addFollows(testUserIds[0], testUserIds[0])
        } catch (err) {
            expect(err instanceof BadRequestError).toBeTruthy();
        }
    });

    test("throws bad request error if user tries to follow someone twice", async function () {
        try {
            let follow = await Follows.addFollows(testUserIds[0], testUserIds[1])
            let followErr = await Follows.addFollows(testUserIds[0], testUserIds[1])
        } catch (err) {
            expect(err instanceof BadRequestError).toBeTruthy();
        }
    });
});


describe("stopFollowing", function(){
    test("works", async function() {
        let follow1 = await Follows.addFollows(testUserIds[0], testUserIds[1])
        let follow2 = await Follows.addFollows(testUserIds[1], testUserIds[0])
        

        

        let delFollow1 = await Follows.stopFollowing(testUserIds[0], testUserIds[1])
        let delFollow2 = await Follows.stopFollowing(testUserIds[1], testUserIds[0])

        let user1 = await Follows.getFollowers(testUserIds[1])
        let user2 = await Follows.getFollowers(testUserIds[0])

        expect(user1.length).toEqual(0)
        expect(user2.length).toEqual(0)
        expect(delFollow1).toEqual({ users_being_followed_id: expect.any(Number)})
        expect(delFollow2).toEqual({ users_being_followed_id: expect.any(Number)})


    });

    test("throws bad request error if user tries to unfollow themselves", async function () {
        try {
            let delFollow1 = await Follows.stopFollowing(testUserIds[0], testUserIds[0])
        } catch (err) {
            expect(err instanceof BadRequestError).toBeTruthy();
        }
    });
})
