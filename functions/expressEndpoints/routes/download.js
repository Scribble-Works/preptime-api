const express = require("express");
const router = express.Router();
const downloadTemplates = require("../controllers/downloadTemplate");

router.get("/:filename", downloadTemplates);

module.exports = router;
