const express = require("express");
const router = express.Router(); 

const authMiddle = require("../middlewares/authMiddle.js");
const multer = require("multer")
const bproductController = require("../controllers/bproductController")
const {body, check} = require('express-validator')
const validatorP = require("../validator/validatorProduct"); 


router.get('/opciones', bproductController.enlaces);
router.get("/altaType",bproductController.altaType)

module.exports = router