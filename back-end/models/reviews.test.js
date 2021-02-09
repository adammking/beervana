"use strict";

const { json } = require("body-parser");
const db = require("../db");
const { NotFoundError } = require("../expressError");
const Reviews = require("./reviews");

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

describe("getUserReviews", function(){
    test("works", async function() {
        let reviews = await Reviews.getUserReviews(testUserIds[0])
        expect(reviews).toEqual([
            {
                id: expect.any(Number),
                title:'TestReviewTitle1',
                body: 'TestReviewBody1'
            }
        ])
    })

    test("returns empty array if user has no reviews", async function() {
        let reviews = await Reviews.getUserReviews(-1)
        expect(reviews).toEqual([])
    })
})

describe("getSingleReview", function(){
    test("works", async function() {
        let reviews = await Reviews.getUserReviews(testUserIds[0])
        let review = await Reviews.getSingleReview(reviews[0].id)
        expect(review).toEqual(
            {
                id: expect.any(Number),
                title:'TestReviewTitle1',
                body: 'TestReviewBody1'
            }
        )
    })

    test("throws notfound error if post not found", async function () {
        try {
            const user = await Reviews.getSingleReview(-1);
        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        }
    })
})

describe("addReview", function(){
    test("works", async function() {
        let review = await Reviews.addReview({title: "AnotherTestTitle", 
                                              body: "AnotherTestBody", 
                                              user_id: testUserIds[0]})
        expect(review).toEqual(
            {
                title:'AnotherTestTitle',
                body: 'AnotherTestBody'
            }
        )
    })
})

describe("deleteReview", function(){
    test("works", async function() {
        let reviews = await Reviews.getUserReviews(testUserIds[0])
        let review = await Reviews.deleteReview(reviews[0].id)
        expect(review).toEqual(`Review Deleted: TestReviewTitle1`)
    })

    test("throws notfound error if no post is found", async function () {
        try {
            const user = await Reviews.deleteReview(-1);
        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        }
    })
})
