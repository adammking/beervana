"use strict";

/** Routes for users. */

const jsonschema = require("jsonschema");

const express = require("express");
const { ensureCorrectUser, ensureLoggedIn } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const Users = require("../models/users");
const userUpdateSchema = require("../schemas/userUpdate");
const newPostSchema = require("../schemas/postNew")
const Posts = require("../models/posts");
const Reviews = require("../models/reviews")
const Tags = require("../models/tags")
const Follows = require("../models/follows");
const Likes = require("../models/likes");

const router = new express.Router();

router.get("/", ensureLoggedIn, async function(req, res, next) {
    try {
        const users = await Users.findAll();
        return res.json({ users });
    } catch (err) {
        return next(err);
    }
});

/** GET /[username] => { user }
 *
 * Returns { username, firstName, lastName }
 *
 * Authorization required: same user-as-:username
 **/

router.get("/:username", ensureLoggedIn, async function(req, res, next) {
    try {
        const user = await Users.get(req.params.username);
        return res.json({ user });
    } catch (err) {
        return next(err);
    }
});



/** PATCH /[username] { user } => { user }
 *
 * Data can include:
 *   { firstName, lastName, password, username }
 *
 * Returns { username, firstName, lastName, email }
 *
 * Authorization required: same-user-as-:username
 **/

router.patch("/:username", ensureCorrectUser, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, userUpdateSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const user = await Users.update(req.params.username, req.body);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});



/** DELETE /[username]  =>  { deleted: username }
 *
 * Authorization required: same-user-as-:username
 **/

router.delete("/:username", ensureCorrectUser, async function (req, res, next) {
  try {
    await Users.remove(req.params.username);
    return res.json({ deleted: req.params.username });
  } catch (err) {
    return next(err);
  }
});

/**User Routes for followers */

router.get("/:username/followers", ensureLoggedIn, async function(req, res, next){
    try {
        const followers = await Follows.getFollowers(res.locals.user.id)
        return res.json({ followers })
    } catch (err) {
        return next(err)
    }
})

router.get("/:username/following", ensureLoggedIn, async function(req, res, next){
    try {
        const following = await Follows.getFollowing(res.locals.user.id)
        return res.json({ following })
    } catch (err) {
        return next(err)
    }
})

router.post("/:username/follow", ensureCorrectUser, async function(req, res, next){
    try {
        const { id } = req.body;
        const newFollow = await Follows.addFollows(res.locals.user.id, id)
        return res.json({ newFollow })
    } catch (err) {
        return next(err)
    }
})

router.delete("/:username/follow", ensureCorrectUser, async function(req, res, next){
    try {
        const { id } = req.body;
        const delFollow = await Follows.stopFollowing(res.locals.user.id, id)
    
        return res.json({ delFollow })
    } catch (err) {
        return next(err)
    }
})

/** User Routes for Posts */

/** GET /[username]/posts => [ { post }, { post }...]
 *
 * Returns { { id, title, body }, ...]
 *   
 *
 * Authorization required: same user-as-:username
 **/

router.get("/:username/posts", ensureLoggedIn, async function(req, res, next) {
    try {
        const posts = await Posts.getUserPosts(res.locals.user.id)
        return res.json({ posts })
    } catch (err) {
        return next(err);
    }
});

router.post("/:username/posts", ensureCorrectUser, async function(req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, newPostSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }
        const post = Posts.addPost({...req.body, user_id: res.locals.user.id})
        return res.status(201).json({ post })
    } catch (err) {
        return next(err);
    }
});

/** GET /[username]/posts/[postId] => { post }
 *
 * Returns { id, title, body }
 *
 * Authorization required: same user-as-:username
 **/

router.get("/:username/posts/:id", ensureLoggedIn, async function(req, res, next) {
    try {
        const post = await Posts.getSinglePost(req.params.id)
        
        return res.json({ post })
    } catch (err) {
        return next(err);
    }
});

/** DELETE /[username]/posts/[id]  =>  { deleted: post }
 *
 * Authorization required: same-user-as-:username
 **/

router.delete("/:username/posts/:id", ensureCorrectUser, async function(req, res, next) {
    try {
        await Posts.deletePost(req.params.id);
        return res.json( {id: req.params.id})
    } catch (err) {
        return next(err);
    }
});

/** User Routes for Post likes */

router.get("/:username/posts/:id/likes", ensureLoggedIn, async function(req, res, next) {
    try {
        let userId = res.locals.user.id
        const likes = await Likes.getLikes(userId)
        return res.json({ likes })
    } catch (err) {
        return next(err);
    }
});

router.post("/:username/posts/:id/likes", ensureCorrectUser, async function(req, res, next) {
    try {

        let postId = req.params.id
        let userId = res.locals.user.id
        const likes = await Likes.addLike(postId, userId)
        return res.json({ likes })
    } catch (err) {
        return next(err);
    }
});

router.delete("/:username/posts/:id/likes", ensureCorrectUser, async function(req, res, next) {
    try {
        let postId = req.params.id
        let userId = res.locals.user.id
        
        const likes = await Likes.deleteLike(postId, userId)
        return res.json({ likes })
    } catch (err) {
        return next(err);
    }
});





/** User Routes for Reviews */

/** GET /[username]/reviews => [ { review }, { review }...]
 *
 * Returns { id, title, body }
 *
 * Authorization required: same user-as-:username
 **/

router.get("/:username/reviews", ensureLoggedIn, async function(req, res, next) {
    try {
        const reviews = await Reviews.getUserReviews(res.locals.user.id)
        return res.json({ reviews })
    } catch (err) {
        return next(err);
    }
});

router.post("/:username/reviews", ensureCorrectUser, async function(req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, newPostSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }
        const review = Reviews.addReview({...req.body, user_id: res.locals.user.id})
        return res.status(201).json({ review })
    } catch (err) {
        return next(err);
    }
});

/** GET /[username]/reviews/[reviewId] => { post }
 *
 * Returns { username, firstName, lastName, isAdmin, jobs }
 *   where jobs is { id, title, companyHandle, companyName, state }
 *
 * Authorization required: same user-as-:username
 **/

router.get("/:username/reviews/:id", ensureLoggedIn, async function(req, res, next) {
    try {
        const review = await Reviews.getSingleReview(req.params.id)
        return res.json({ review })
    } catch (err) {
        return next(err);
    }
});

/** DELETE /[username]/reviews/[id]  =>  { deleted: review }
 *
 * Authorization required: same-user-as-:username
 **/
router.delete("/:username/reviews/:id", ensureCorrectUser, async function(req, res, next) {
    try {
        await Reviews.deleteReview(req.params.id);
        return res.json({ deleted: +req.params.id })
    } catch (err) {
        return next(err);
    }
});


/** User Routes for Tags */

router.post("/:username/tags", ensureCorrectUser, async function(req, res, next) {
    try {
        const tag = await Tags.addTag({...req.body, user_id: res.locals.user.id})
        return res.status(201).json({ tag })
    } catch (err) {
        return next(err);
    }
});

/** DELETE /[username]/tags/[id]  =>  { deleted: tag }
 *
 * Authorization required: same-user-as-:username
 **/
router.delete("/:username/tags/:id", ensureCorrectUser, async function(req, res, next) {
    try {
        await Tags.deleteTag(req.params.id)
        return ({ deleted: +req.params.id })
    } catch (err) {
        return next(err);
    }
});



module.exports = router;