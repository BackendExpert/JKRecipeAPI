const express = require('express');
const APIController = require('../controller/APIController');

const router = express.Router();

router.get('/alldata', APIController.alldata)

module.exports = router;