const { validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const createScore = async (req, res) => {
  const { score, scoreEmail } = req.body;
  const errors = validationResult(req);
  try {
    const user = await Prisma.score.create({
      data: {
        score,
        scoreEmail,
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
