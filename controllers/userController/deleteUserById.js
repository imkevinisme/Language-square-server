const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

const deleteUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Prisma.user.delete({
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
      message: "User Deleted successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ error: "Error Deleting user" });
  }
};

module.exports = deleteUserById;
