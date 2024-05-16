const express = require("express");
const router = express.Router();
const downloadTemplates = require("../controllers/downloadTemplates");

router.get("/:filename", downloadTemplates);

module.exports = router;
