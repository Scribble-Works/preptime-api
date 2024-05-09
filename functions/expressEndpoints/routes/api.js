const express = require("express");

const router = express.Router();
const saveContext = require("../controllers/saveContext");
const getContext = require("../controllers/getContext");
const createContact = require("../controllers/createHubspotContact");
const submitContactUs = require("../controllers/submitHubspotForm");

router.post("/scribbleworks-demoresponses", saveContext);

router.get("/scribbleworks-demoresponses/:id", getContext);

router.post("/contact", createContact);

router.post("/contactUs", submitContactUs);

module.exports = router;
