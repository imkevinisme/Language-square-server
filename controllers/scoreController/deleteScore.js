const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const deleteScore = async (req, res) => {
  const user = await Prisma.score.deleteMany();
  res.json({
    message: "Delete All Score.",
    data: user,
  });
};
module.exports = deleteScore;
