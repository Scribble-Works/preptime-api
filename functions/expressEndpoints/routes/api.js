const express = require("express");
const router = express.Router();
const saveContext = require("../controllers/saveContext");
const getContext = require("../controllers/getContext");
const createContact = require("../controllers/createContact");

router.post("/scribbleworks-demoresponses", saveContext);

router.get("/scribbleworks-demoresponses/:id", getContext);

router.post("/contact", createContact);

module.exports = router;
