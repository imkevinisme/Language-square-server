const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const deleteScoreById = async (req, res) => {
  const { id } = req.params;

  try {
    const score = await Prisma.score.delete({
      where: {
        id: parseInt(id),
      },
    });

    if (!score) {
      return res.status(404).json({
        message: "Score not found",
      });
    }

    return res.status(200).json({
      message: "Score Deleted successfully",
      data: score,
    });
  } catch (error) {
    return res.status(500).json({ error: "Error Deleting score" });
  }
};

module.exports = deleteScoreById;
