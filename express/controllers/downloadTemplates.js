const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(
    process.cwd(),
    `express/fileTemplates/${filename}`
  );
  console.log("file path", filePath);
  let stream = fs.createReadStream(filePath);
  stream.pipe(res);
  stream.on("error", (err) => {
    res
      .status(500)
      .send(`Error fetching file with the name ${filename}: ${err}`);
  });
};
