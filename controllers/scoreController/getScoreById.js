const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const getScoreById = async (req, res) => {
  const { id } = req.params;

  try {
    const score = await Prisma.score.findUnique({
      where: {
        id: id,
      },
    });

    if (!score) {
      return res.status(404).json({
        message: "Score not found",
      });
    }

    return res.status(200).json({
      message: "Score retrieved successfully",
      data: score,
    });
  } catch (error) {
    return res.status(500).json({ error: "Error retrieving score" });
  }
};

module.exports = getScoreById;
