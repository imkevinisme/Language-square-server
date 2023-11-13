const { validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const { sign } = require("jsonwebtoken");

const authUser = async (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);

  try {
    const user = await Prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      res.json({ error: "User Doesn't Exist" });
    } else if (password == user.password) {
      const accesToken = sign(
        { username: user.username, email: user.email },
        "Token"
      );
      // res.json({
      //   message: "Login Successfully",
      //   data: user,
      // });
      res.json(accesToken);
    } else {
      res.json({
        error: "Wrong Email or Password Combination",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = authUser;
