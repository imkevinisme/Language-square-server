const { validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const createScore = async (req, res) => {
  const { username, email, password } = req.body;
  const errors = validationResult(req);
  try {
    const user = await Prisma.score.create({
      data: {
        scores,
        scoreBy,
      },
    });
    res.json({
      message: "Score created successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = createScore;
