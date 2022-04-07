const { check, body } = require("express-validator")
const fs = require("fs");
const path = require("path");
const modelCrud = require('../data/modelCrud');
const productModel = modelCrud("productos"); 

/*function findAll(){
    const products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/productos.json")));
    return products;
}*/

const validatorP = {
    /*login:[
        check("email")
            .notEmpty()
            .withMessage("campo email vacio"),
        check("password")
            .notEmpty()
            .withMessage("campo password vacio")
    ],*/
    altaProducto:[
        check("name")
            .notEmpty()
            .withMessage("Nombre del Producto debe estar completo")
            .bail()       
            .custom(function(value){
                let productFound = productModel.findName(value); 
                console.log(value + " es el custom ")               
                //si existe un PRODUCTO devuelvo el error
                if(productFound){
                    throw new Error("Este producto YA EXISTE");
                }
                //sino devuelvo true
                return true
            })
           ,
        check("description")
            .notEmpty()
            .withMessage("campo Descripción NO puede estar  vacio"),
        check("descriptcion2")
            .notEmpty()
            .withMessage("Campo DETALLE  NO puede estar vacío"),
        check("price")
            .notEmpty()
            .isNumeric()
            .withMessage("campo PRECIO no puede estar vacío y es NRO "),
        check("colection")
            .notEmpty()            
            .withMessage("campo COLECCIÓN debe ser completado "),        
        check("tipo")
            .notEmpty()            
            .withMessage("campo TIPO DE PRODUCTO debe ser completado "),
        check("cantidad")
            .notEmpty() 
            .isInt()           
            .withMessage("Es OBLIGATORIO INGRESAR CANTIDAD ingreso Producto "),
        check("anio")
            .notEmpty()               
            .withMessage("Debe Completar el AÑO/Colección  "),
        check("color")
            .notEmpty()               
            .withMessage("Debe Seleciona COLOR ")  
          
    ],
    updateProducto:[
        //todo igual que ALTA pero el CUSTOM NO VA PORQUE ES UN PRODUCTO EXISTENTE 
        check("name")
            .notEmpty()
            .withMessage("Nombre del Producto debe estar completo"),
        check("description")
            .notEmpty()
            .withMessage("campo Descripción NO puede estar  vacio"),
        check("descriptcion2")
            .notEmpty()
            .withMessage("Campo DETALLE  NO puede estar vacío"),
        check("price")
            .notEmpty()
            .isNumeric()
            .withMessage("campo PRECIO no puede estar vacío y es NRO "),
        check("colection")
            .notEmpty()            
            .withMessage("campo COLECCIÓN debe ser completado "),        
        check("tipo")
            .notEmpty()            
            .withMessage("campo TIPO DE PRODUCTO debe ser completado "),
        check("cantidad")
            .notEmpty() 
            .isInt()           
            .withMessage("Es OBLIGATORIO INGRESAR CANTIDAD ingreso Producto "),
        check("anio")
            .notEmpty()               
            .withMessage("Debe Completar el AÑO/Colección  "),
        check("color")
            .notEmpty()               
            .withMessage("Debe Seleciona COLOR ")  
          
    ]
}

module.exports = validatorP