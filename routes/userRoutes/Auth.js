const express = require("express");
const { check } = require("express-validator");

const authUser = require("../../controllers/userController/authUser");

const router = express.Router();

router.post("/", authUser);

module.exports = router;
