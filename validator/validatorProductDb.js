const { check, body } = require("express-validator")
const fs = require("fs");
const path = require("path");

const db = require('../src/database/models');
const sequelize = db.sequelize;

const validatorPDB = {
   altaType :[
   check("name")
   .notEmpty()
   .withMessage("Complete Campo Producto")
   .bail() 
   .custom(function(value){
       return db.ProductType.findOne({
           where:{
               type_name :value
           } 
        }) 
        .then (productType =>{
            if(productType){
                return Promise.reject("Este nombre-tipo de Producto ya está en la base")
            }
        })        
    } )
   ],
   altaYear :[
    check("name")
    .notEmpty()
    .withMessage("Complete Campo Año")
    .bail() 
    .custom(function(value){
        return db.ProductYear.findOne({
            where:{
                year_name :value
            } 
         }) 
         .then (productYear =>{
             if(productYear){
                 return Promise.reject("Este nombre-tipo de Producto ya está en la base")
             }
         })        
     } )
],
altaColection :[
    check("name")
    .notEmpty()
    .withMessage("Complete Colección")
    .bail() 
    .custom(function(value){
        return db.ProductColection.findOne({
            where:{
                colection_name :value
            } 
         }) 
         .then (productColection =>{
             if(productColection){
                 return Promise.reject("Esta COLECCIÓN  de Producto ya está en la base")
             }
         })        
     } )
    ],
    altaColor :[
        check("name")
        .notEmpty()
        .withMessage("Complete nombre COLOR")
        .bail() 
        .custom(function(value){
            return db.ProductColor.findOne({
                where:{
                    color_name :value
                } 
             }) 
             .then (productColor =>{
                 if(productColor){
                     return Promise.reject("Esta NOMBRE COLOR ya está en la base")
                 }
             })        
         } ),
        check("image")
         .notEmpty()
         .withMessage("Debe Ingresar el LINK A ARCHIVOS IMAGENES-COLORES")
    ],

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

module.exports = validatorPDB;