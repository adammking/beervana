"use strict";

const db = require("../db");
const { NotFoundError, BadRequestError } = require("../expressError");
const Likes = require("./likes");

const {
    commonBeforeAll,
    commonBeforeEach,
    commonAfterEach,
    commonAfterAll,
    testUserIds,
    testPostIds
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

describe("addLike", function() {
    test("works", async function() {
        const like = await Likes.addLike({ post_id: testPostIds[0], 
                                     user_id: testUserIds[0] })
        expect(like).toEqual({
            posts_id: testPostIds[0]
        });
    })
    
    test("throws bad request if user has already liked post", async function() {
        try {
        const like = await Likes.addLike({ post_id: testPostIds[0], 
                                     user_id: testUserIds[0] })

        const likeErr = await Likes.addLike({ post_id: testPostIds[0], 
                                     user_id: testUserIds[0] })
        } catch (err) {
            expect(err instanceof BadRequestError).toBeTruthy()
        }
    });
        
});

describe("deleteLike", function(){
    test("works", async function() {
        const like = await Likes.addLike({ post_id: testPostIds[0], 
                                     user_id: testUserIds[0] })

        let delLike = await Likes.deleteLike({post_id: testPostIds[0], 
                                     user_id: testUserIds[0] })
    expect(delLike).toEqual({
        id : expect.any(Number)
    });
    });

    test("throws not found if post was deleted", async function() {
        try {
        const like = await Likes.deleteLike({ post_id: 0, 
                                     user_id: testUserIds[0] })

        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy()
        }
    });

    test("throws not found if user was deleted", async function() {
        try {
        const like = await Likes.deleteLike({ post_id: testPostIds[0], 
                                     user_id: 0 })

        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy()
        }

        });
    });


describe("getLikes", function(){
    test("works", async function() {
        const like = await Likes.addLike({ post_id: testPostIds[0], 
                                     user_id: testUserIds[0] })

        const likeCount = await Likes.getLikes(testPostIds[0])
        expect(likeCount).toEqual({ "count": "1" })                            
    });

    test("works with multiple users", async function() {
        const like1 = await Likes.addLike({ post_id: testPostIds[0], 
                                     user_id: testUserIds[0] })
        const like2 = await Likes.addLike({ post_id: testPostIds[0], 
                                     user_id: testUserIds[1] })
        

        const likeCount = await Likes.getLikes(testPostIds[0])
        expect(likeCount).toEqual({ "count": "2" })                            
    });

    test("works with no likes", async function() {
        
        const likeCount = await Likes.getLikes(testPostIds[0])
        expect(likeCount).toEqual({ "count": "0" })                            
    });
});