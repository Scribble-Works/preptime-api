const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());
const api = require("./routes/api");
const download = require("./routes/download");
app.use("/api", api);
app.use("/download", download);

// Test resquest/response to make sure server is running.
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "server ready to serve data...",
    variables: process.env,
  });
});

exports.preptimeAPI = app;
