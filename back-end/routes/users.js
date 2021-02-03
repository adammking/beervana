"use strict";

/** Routes for users. */

const jsonschema = require("jsonschema");

const express = require("express");
const { ensureCorrectUser } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const Users = require("../models/users");
const userUpdate = require("../schemas/userUpdate.json");
const Posts = require("../models/posts");

const router = express.Router();

/** GET /[username] => { user }
 *
 * Returns { username, firstName, lastName, isAdmin, jobs }
 *   where jobs is { id, title, companyHandle, companyName, state }
 *
 * Authorization required: same user-as-:username
 **/

router.get("/:username", ensureCorrectUser, async function(req, res, next) {
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
 * Returns { username, firstName, lastName, email, isAdmin }
 *
 * Authorization required: same-user-as-:username
 **/

router.patch("/:username", ensureCorrectUser, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, userUpdate);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const user = await User.update(req.params.username, req.body);
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
    await User.remove(req.params.username);
    return res.json({ deleted: req.params.username });
  } catch (err) {
    return next(err);
  }
});

router.get("/:username/posts", ensureCorrectUser, async function(req, res, next) {
    try {
        const user = await Users.get(req.params.username);
        const posts = await Posts.getUserPosts(user.id)
        return res.json({ posts })
    } catch (err) {
        return next(err);
    }
});

router.post("/:username/posts", ensureCorrectUser, async function(req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, postNew);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }
        const post = Posts.addPost(req.body)
        return res.status(201).json({ post })
    } catch (err) {
        return next(err);
    }
});

router.get("/:username/posts/:id", ensureCorrectUser, async function(req, res, next) {
    try {
        const post = await Posts.getSinglePosts(req.params.id)
        return res.json({ post })
    } catch (err) {
        return next(err);
    }
});

router.delete("/:username/posts/:id", ensureCorrectUser, async function(req, res, next) {
    try {
        await Posts.deletePost(req.params.id);
        return res.json({ deleted: +req.params.id })
    } catch (err) {
        return next(err);
    }
});