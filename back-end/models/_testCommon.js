const bcrypt = require("bcrypt");

const db = require("../db");
const { BCRYPT_WORK_FACTOR } = require("../config");

const testUserIds = [];
const testBreweryIds = [];
const testPostIds = [];
async function commonBeforeAll() {

    await db.query("DELETE FROM users");
    await db.query("DELETE FROM beers");
    await db.query("DELETE FROM breweries");
    await db.query("DELETE FROM likes");
    await db.query("DELETE FROM posts");
    await db.query("DELETE FROM reviews");
    await db.query("DELETE FROM flavor_tags");
    await db.query("DELETE FROM follows");

    const testPass1 = await bcrypt.hash("password1", BCRYPT_WORK_FACTOR) 
    const testPass2 = await bcrypt.hash("password2", BCRYPT_WORK_FACTOR)
    const users = await db.query(
      `INSERT INTO users(username, password, first_name, last_name) 
       VALUES ('u1', $1, 'U1F', 'U1L'), ('u2', $2, 'U2F', 'U2L') 
       RETURNING id, username, first_name AS "firstName", last_name AS "lastName"`,
      [testPass1, testPass2]);
    testUserIds.splice(0, 0, ...users.rows.map(u => u.id))

    const breweries = await db.query(
        `INSERT INTO breweries(name,
                               address1,
                               city,
                               state,
                               descript)
         VALUES ('testBrew1', 'test address1', 'testCity1', 'testState1', 'Descrip1'),
                ('testBrew2', 'test address 2', 'testCity2', 'testState2', 'Descrip2')
         RETURNING id`
    );

    testBreweryIds.splice(0, 0, ...breweries.rows.map(u => u.id))
    
    await db.query(
        `INSERT INTO categories(cat_name)
         VALUES ('testCat1'),
                ('testCat2')`
    );

    await db.query(
        `INSERT INTO styles(cat_id, style_name)
         VALUES ('1', 'testStyle1'),
                ('2', 'testStyle2')`
    );

    await db.query(
        `INSERT INTO beers(name,
                            brewery_id,
                            cat_id,
                            style_id,
                            descript)
         VALUES ('testBeer1', $1, '1', '1', 'Descrip1'),
                ('testBeer2', $2, '2', '2', 'Descrip2')`,
                [testBreweryIds[0], testBreweryIds[1]]
    );

    await db.query(
        `INSERT INTO reviews(title, body, users_id)
         VALUES ('TestReviewTitle1', 'TestReviewBody1', $1),
                ('TestReviewTitle2', 'TestReviewBody2', $2)`, 
                [testUserIds[0], testUserIds[1]])

    const posts = await db.query(
        `INSERT INTO posts(title, body, users_id)
         VALUES ('TestPostTitle1', 'TestPostBody1', $1),
                ('TestPostTitle2', 'TestPostBody2', $2)
         RETURNING id`, 
                [testUserIds[0], testUserIds[1]])
    testPostIds.splice(0, 0, ...posts.rows.map(u => u.id))           

    await db.query(
        `INSERT INTO flavor_tags(type, users_id)
         VALUES ('TestTag1', $1),
                ('TestTag2', $2)`, 
                [testUserIds[0], testUserIds[1]])
}




async function commonBeforeEach() {
    await db.query("BEGIN");
};

async function commonAfterEach() {
  await db.query("ROLLBACK");
}

async function commonAfterAll() {
  await db.end();
}

module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  testUserIds,
  testBreweryIds,
  testPostIds
};


