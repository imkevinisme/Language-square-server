const express = require("express");
const { check } = require("express-validator");

const getScore = require("../../controllers/scoreController/getScore");
const getScoreById = require("../../controllers/scoreController/getScoreById");
const createScore = require("../../controllers/scoreController/createScore");
const createScoreById = require("../../controllers/scoreController/createScoreById");
const deleteScore = require("../../controllers/scoreController/deleteScore");
const deleteScoreById = require("../../controllers/scoreController/deleteScoreById");

const router = express.Router();

router.get("/", getScore);

router.get("/:id", getScoreById);

router.post("/", createScore);

router.post("/id", createScoreById);

router.delete("/", deleteScore);

router.delete("/:id", deleteScoreById);

module.exports = router;
