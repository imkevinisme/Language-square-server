const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const createScoreById = async (req, res) => {
  const { scoreEmail, score } = req.body;

  try {
    const Score = await Prisma.user.findUnique({
      where: {
        email: scoreEmail,
      },
    });

    if (!Score) {
      return res.json({
        error: "Score Not Storing because No Login.",
      });
    } else if (Score) {
      const Score = await Prisma.score.create({
        data: {
          scoreEmail,
          score,
        },
      });
      return res.status(200).json({
        message: "Score Storing Successfully",
        data: Score,
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = createScoreById;
