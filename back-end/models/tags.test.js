"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError");
const Tags = require("./tags");

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

describe("getUserPosts", function(){
    test("works", async function() {
        let posts = await Posts.getUserPosts(testUserIds[0])
        expect(posts).toEqual([
            {
                id: expect.any(Number),
                title:'TestPostTitle1',
                body: 'TestPostBody1'
            }
        ])
    })

    test("returns empty array if user has no Posts", async function() {
        let posts = await Posts.getUserPosts(-1)
        expect(posts).toEqual([])
    })
})

describe("getSinglePost", function(){
    test("works", async function() {
        let posts = await Posts.getUserPosts(testUserIds[0])
        let post = await Posts.getSinglePost(posts[0].id)
        expect(post).toEqual(
            {
                id: expect.any(Number),
                title:'TestPostTitle1',
                body: 'TestPostBody1'
            }
        )
    })

    test("throws notfound error if post not found", async function () {
        try {
            const user = await Posts.getSinglePost(-1);
        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        }
    })
})

describe("addPost", function(){
    test("works", async function() {
        let post = await Posts.addPost({title: "AnotherTestTitle", 
                                              body: "AnotherTestBody", 
                                              user_id: testUserIds[0]})
        expect(post).toEqual(
            {
                title:'AnotherTestTitle',
                body: 'AnotherTestBody'
            }
        )
    })
})

describe("deletePost", function(){
    test("works", async function() {
        let posts = await Posts.getUserPosts(testUserIds[0])
        let post = await Posts.deletePost(posts[0].id)
        expect(post).toEqual(`Post Deleted: TestPostTitle1`)
    })

    test("throws notfound error if no post is found", async function () {
        try {
            const user = await Posts.deletePost(-1);
        } catch (err) {
            expect(err instanceof NotFoundError).toBeTruthy();
        }
    })
})
