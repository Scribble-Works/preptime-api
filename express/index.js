require("dotenv").config();

const express = require("express");
const cors = require("cors");
const api = require("./routes/api");
const download = require("./routes/download");
const app = express();
const port = process.env.PORT;
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use("/api", api);
app.use("/download", download);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "server ready to serve data...",
    variables: process.env,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
