const express = require("express");

const router = express.Router();
const saveContext = require("../controllers/saveContext");
const getContext = require("../controllers/getContext");

router.post("/scribbleworks-demoresponses", saveContext);

router.get("/scribbleworks-demoresponses/:id", getContext);

module.exports = router;
