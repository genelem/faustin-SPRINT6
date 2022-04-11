const express = require("express");
const router = express.Router(); 

const authMiddle = require("../middlewares/authMiddle.js");
const multer = require("multer")
const bproductController = require("../controllers/bproductController")
const {body, check} = require('express-validator')
const validatorPDB = require("../validator/validatorProductDb"); 


router.get('/opciones', bproductController.enlaces);
// TIPO DE PRODUCTO
router.get("/altaType",bproductController.altaType);
router.put("/creaType",validatorPDB.altaType,bproductController.creaType)
router.get("/listType",bproductController.listType);
router.get("/deleteType/:id",bproductController.deleteType)
// AÑO PRODUCTO
router.get("/altaYear",bproductController.altaYear);
router.put("/creaYear",validatorPDB.altaYear,bproductController.creaYear)
router.get("/listYear",bproductController.listYear);
router.get("/deleteYear/:id",bproductController.deleteYear)

module.exports = router