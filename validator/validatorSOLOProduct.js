const { check, body } = require("express-validator")
const fs = require("fs");
const path = require("path");


/*function findAll(){
    const products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/productos.json")));
    return products;
}*/
const db = require('../src/database/models');
const sequelize = db.sequelize;

const validatorSOLOP = {
    
    altaProducto:[
        check("name")
            .notEmpty()
            .withMessage("Nombre del Producto debe estar completo")
            .bail()       
            .custom(function(value){              

             return db.ProductType.findOne({
                     where:{
                            id :value
                        } 
                     }) 
                     .then (productType=>{
                         if(productType){
                             return Promise.reject("Este PRODUCTO  ya está en la base")
                         }
                     })        
                 } )               
           ,
        check("description")
            .notEmpty()
            .withMessage("campo Descripción NO puede estar  vacio"),
        check("descriptcion2")
            .notEmpty()
            .withMessage("Campo DETALLE  NO puede estar vacío"),
        check("price")
            .notEmpty()            
            .withMessage("campo PRECIO no puede estar vacío  "),
        check("colection")
            .notEmpty()            
            .withMessage("campo COLECCIÓN debe ser completado ")
            .bail()
            .custom(function(value){
                return db.ProductColection.findOne({
                    where:{
                        id :value
                    } 
                 }) 
                 .then (productColection =>{
                     if(!productColection){
                         return Promise.reject("Colección Inválida.OPCION DAR ALTA(busque ICONO")
                     }
                 })        
             } )
            ,        
        check("tipo")
            .notEmpty()            
            .withMessage("campo TIPO DE PRODUCTO debe ser completado ")
            .bail()
            .custom(function(value){
                return db.ProductType.findOne({
                    where:{
                        id :value
                    } 
                 }) 
                 .then (productType =>{
                     if(!productType){
                         return Promise.reject("TIPO de Producto INVALIDO:OPCION dar alta")
                     }
                 })        
             } )
             ,
        //check("cantidad")
           // .notEmpty()
          //  .withMessage("Es OBLIGATORIO INGRESAR CANTIDAD "),
        check("anio")
            .notEmpty()               
            .withMessage("Debe Completar el AÑO/Colección  ")
            .bail()
            .custom(function(value){
                return db.ProductYear.findOne({
                    where:{
                        id :value
                    } 
                 }) 
                 .then (productYear =>{
                     if(!productYear){
                         return Promise.reject("AÑO INVALIDO. OPCION:dar alta ")
                     }
                 })        
             } )
             ,
     /*   check("color")
            .notEmpty()               
            .withMessage("Debe Seleciona COLOR ")  
            .bail()
            .custom(function(value){
                console.log("en value el color es es = " + value)
                return db.ProductColor.findOne({
                    where:{
                        color_name :value
                    } 
                 }) 
                 .then (productColor =>{
                     if(!productColor){
                         return Promise.reject("COLOR INVALIDDO. OPCION: dar alta")
                     }
                 })        
             } )*/
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

module.exports = validatorSOLOP