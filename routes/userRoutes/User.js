const express = require("express");
const { check } = require("express-validator");

const authUser = require("../../controllers/userController/authUser");
const getUser = require("../../controllers/userController/getUser");
const getUserById = require("../../controllers/userController/getUserById");
const createUser = require("../../controllers/userController/createUser");
const deleteUser = require("../../controllers/userController/deleteUser");
const deleteUserById = require("../../controllers/userController/deleteUserById");

const router = express.Router();

router.get("/", getUser);

router.get("/:id", getUserById);

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

router.delete("/:id", deleteUserById);

module.exports = router;
