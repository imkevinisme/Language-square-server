require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const userRoute = require("./routes/userRoutes/User");
const scoreRoute = require("./routes/scoreRotues/Score");
const authRoute = require("./routes/userRoutes/Auth");

app.use("/user", userRoute);
app.use("/score", scoreRoute);
app.use("/auth", authRoute);

const port = process.env.APP_PORT || 3001;

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
