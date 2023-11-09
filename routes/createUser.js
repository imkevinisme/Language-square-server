const { validationResult, matchedData } = require("express-validator");
const Prima = require("@prisma/client");
// const GenerateToken = require("../../models/tokens");

const createUser = async (req, res) => {
  const errors = validationResult(req);
  // const requiredData = matchedData(req, { includeOptionals: false });

  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  try {
    const { contactId } = req.params;

    const data = await Prisma.Activity.create({
      data: {
        name: "kevin",
        email: "kevin@gmail.com",
        password: "Kevin123",
      },
    });

    return res.status(200).json({
      message: "User created successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

module.exports = createUser;
