const express = require('express');
const APIController = require('../controller/APIController');

const router = express.Router();

router.get('/alldata', APIController.alldata)
router.get('/onerecipe/:id', APIController.onedata)

module.exports = router;