require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const api = require("./routes/api");
const download = require("./routes/download");

// const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5000;
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME;

app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());

// console.log(process.cwd())
async function init() {
  const conn = await mongoose.connect(
    `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
      directConnection: true,
    }
  );
  if (conn === mongoose) {
    console.log("connected to mongodb");

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

    app.listen(PORT, () => {
      console.log(`Server running on port:${PORT}`);
    });
    return conn;
  }
}

module.exports.conn = init();
