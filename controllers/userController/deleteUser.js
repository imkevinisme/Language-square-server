const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const deleteUser = async (req, res) => {
  const user = await Prisma.user.deleteMany();
  res.json({
    message: "Delete All User.",
    data: user,
  });
};
module.exports = deleteUser;
