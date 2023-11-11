const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const getUser = async (req, res) => {
  const user = await Prisma.user.findMany();
  res.json({
    message: "Retrieve All User.",
    data: user,
  });
};
module.exports = getUser;
