const express = require("express");
const router = express.Router();


const authMiddle = require("../middlewares/authMiddle.js");
const multer = require("multer")
const productController = require("../controllers/productController")
const {body, check} = require('express-validator')
const validatorP = require("../validator/validatorProduct");


router.get('/detail/:id', productController.detail);
/*router.get("/login",productController.login)
router.get("/register",productController.register);*/

//router.get("/irCarrito",productController.irCarrito)
router.get("/carrito",authMiddle,productController.carrito);
router.get("/finCarrito",authMiddle,productController.finCarrito);
// viene el crud
router.get("/listProductos",authMiddle,productController.list);
router.get("/detailOne/:id",productController.detailOne)
router.post("/updateOne/:id",validatorP.updateProducto,productController.storeUpdate)

router.get("/altaProducto",authMiddle,productController.altaP);
router.post("/altaProducto",validatorP.altaProducto,productController.storeAlta);

router.get("/bajaProducto/:id",productController.bajaProducto)
router.post("/bajaProducto", productController.storeDelete)

router.get("/ofertas",productController.ofertas);

module.exports = router;