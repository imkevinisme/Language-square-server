const express = require("express");
const { check } = require("express-validator");

const createUser = require("../../controllers/userController/createUser");
const getAllUser = require("../../controllers/userController/getUser");
const deleteUser = require("../../controllers/userController/deleteUser");

const router = express.Router();

router.post(
  "/",
  [
    check("username")
      .isLength({ min: 1 })
      .withMessage("Username is required ...")
      .trim(),

    check("email").isEmail().withMessage("Email is not valid ...").trim(),

    check("password")
      .isLength({ min: 1 })
      .withMessage("Password is required ...")
      .trim(),
  ],
  createUser
);

router.delete("/", deleteUser);

router.get("/", getAllUser);

module.exports = router;
