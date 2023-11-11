const { validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const errors = validationResult(req);
  try {
    const user = await Prisma.user.create({
      data: {
        email,
        username,
        password,
      },
    });
    res.json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = createUser;
