var express = require('express');
var router = express.Router();
const path = require('path');
const authMiddle = require("../middlewares/authMiddle.js");

const buserController = require("../controllers/buserController")
const {body, check} = require('express-validator')
const validatorUserDb = require("../validator/validatorUserDb");

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/avatars'));
    },
    filename: (req, file, cb) => {
        console.log(file);
        const newFilename = 'nuevo-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});
const upload = multer({ storage });
//alta tabla categoria
router.get("/altaCategory",buserController.altaCategory);
router.put("/creaCategory",validatorUserDb.altaCategory,buserController.creaCategory)
router.get("/listCategory",buserController.listCategory);
router.get("/deleteCategory/:id",buserController.deleteCategory)
// login
router.get("/login",buserController.login);
router.post("/login",validatorUserDb.login,buserController.processLogin);
 /* alta usuario */
router.get("/register",buserController.register)
router.put("/register", upload.single("avatar"),validatorUserDb.register,buserController.altaRegister);
//* si se olvidó la contraseña ( ver )
//router.get("/olvido",userController.forgot)
//router.post("/olvido",validatorU.olvidoV,userController.activarSesion)
//*cambiar contraseña
//router.get("/cambio",userController.cambioPass)
//router.post("/cambio",validatorU.login,userController.processLoginCambio)
//router.post("/cambioPass/:id",validatorU.cambioP,userController.processCambioP)

//


//router.get("/borrar",userController.baja)
//router.post("/borrar",validatorU.olvidoV,userController.delete)

//router.get("/listUsuarios",authMiddle,userController.list);
//router.get("/detailOne/:id",userController.detailOne)
//router.post("/updateOne/:id",validatorU.updateUser,userController.storeUpdate)
//
//router.get("/cerrarSesion",userController.ConfirmLogout)
//router.post("/cerrarSesion",userController.logout)


module.exports = router;
