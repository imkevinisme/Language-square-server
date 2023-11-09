require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const userRoute = require("./routes/createUser");

app.use(userRoute);

const port = process.env.APP_PORT || 3001;

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
