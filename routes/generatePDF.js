const express = require('express');
const router = express.Router();
const { generatepdf, downloadpdf } = require('../controllers/generatepdf');

router.post('/create', generatepdf)
router.get('/download/:filename', downloadpdf)

module.exports = router;