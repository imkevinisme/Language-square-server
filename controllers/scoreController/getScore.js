const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const getScore = async (req, res) => {
  const user = await Prisma.score.findMany();
  res.json({
    message: "Retrieve All Score.",
    data: user,
  });
};
module.exports = getScore;
