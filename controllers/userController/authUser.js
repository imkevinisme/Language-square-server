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
    if (password == user.password) {
      res.json({
        message: "Login Successfully",
        data: user,
      });
      const accesToken = sign(
        { username: user.username, email: user.email },
        "Token"
      );
    } else {
      res.json({
        error: "Invalid email or password",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = authUser;
