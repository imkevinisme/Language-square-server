const { PrismaClient } = require("@prisma/client");
const { json } = require("body-parser");
const Prisma = new PrismaClient();

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User retrieved successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ error: "Error retrieving user" });
  }
};

module.exports = getUserById;
