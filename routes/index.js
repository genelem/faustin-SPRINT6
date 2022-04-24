var express = require('express');
var router = express.Router();


//
const mainControllerDB = require('../controllers/mainControllerDB');
 
/* GET home page. */
router.get('/', mainControllerDB.home);

module.exports = router;
