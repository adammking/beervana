"use strict";

/** Routes for users. */


const express = require("express");
const { ensureCorrectUser } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const Beers = require("../models/users");

const router = express.Router();

router.get("/", ensureCorrectUser)