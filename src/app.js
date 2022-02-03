require("dotenv").config();
const express = require("express");
const app = express();
const mainRouter = require("./routes");
const cors = require("cors");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello undefined api !" });
});
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_ORIGIN,
  })
);
app.use("/api", mainRouter);

module.exports = app;
