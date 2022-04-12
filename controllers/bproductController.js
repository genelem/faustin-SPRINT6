
const fs = require('fs');
const path = require('path');
//const {validationResult, body} = require("express-validator")
const { validationResult,body} = require("express-validator")

const db = require('../src/database/models');
const sequelize = db.sequelize;

/*function Todos(nombre,nombre2){  
    // busca productos que haya y los pone en array
    db.nombre.findAll({
        order : [
            ['id', 'ASC']
        ],
        limit: 8
    }) 
    .then(function(nombre2){ 
        return        
        res.render('altaTypeDb', {array:productTypes});}         
    );    
}*/

const controller = {
    enlaces: (req,res) =>{
        res.render("enlacesDB")
    },
    altaType:(req,res) =>{
        let array = [ {
            id:0,
            type_name :" "
        }]
        db.ProductType.findAll({
            order : [
                ['id', 'ASC']
            ]         
        }) 
        .then(function(productTypes){
            if (productTypes) {
            res.render('altaTypeDb', {array:productTypes});}
            else{
                res.render("altaTypeDb",{array})
            }
        }); 
    },
    creaType: (req,res) =>{
        // inicializo Variables
        let array = [ {
            id:0,
            type_name :" "
        }] ;        
        const errors = validationResult(req);        
        console.log("la lenght de errores es : " + errors.errors.length)
        
        //    
        db.ProductType.findAll({
                order : [
                    ['id', 'ASC']
                ]      
            }) 
            .then(function(productTypes){                
                //chequea errores
                 if(errors.errors.length > 0){   
                     // SIGO CON ERROR FANTASMA          
                     res.render("altaTypeDb", {errorsProd: errors.mapped(),array:productTypes})
                    } 
                    else{                                 
                        console.log("está en else de alta " + req.body.name)           
                        let newType = {            
                            type_name: req.body.name                      
                        };
                    console.log(newType.type_name + "es el req.body")
                    db.ProductType.create(newType); 
                            res.render("enlacesDB") ;              
                               
                }; // termina el IF                   
                } ) 
            },
    listType:(req,res) =>{
                let array = [ {
                    id:0,
                    type_name :" "
                }]
                db.ProductType.findAll({
                    order : [
                        ['id', 'ASC']
                    ]         
                }) 
                .then(function(productTypes){
                    if (productTypes) {
                    res.render('listTypeDb', {array:productTypes});}
                    else{
                        res.render("listTypeDb",{array})
                    }
                }); 
    },
    deleteType: (req,res) =>{ 
        db.ProductType.destroy({
            where:{
                id: req.params.id
            }
        })
        .then (function(){
            res.send("baja existosa")
     } ) 
    },       
    altaYear:(req,res) =>{
        let array = [ {
            id:0,
            year_name :" "
        }]
        db.ProductYear.findAll({
            order : [
                ['id', 'ASC']
            ]         
        }) 
        .then(function(productYears){
            if (productYears) {
            res.render('altaYearDb', {array:productYears});}
            else{
                res.render("altaYearDb",{array})
            }
        }); 
    },
    creaYear: (req,res) =>{
        // inicializo Variables
        let array = [ {
            id:0,
            year_name :" "
        }] ;        
        const errors = validationResult(req);        
        console.log("la lenght de errores es : " + errors.errors.length)
        
        //    
        db.ProductYear.findAll({
                order : [
                    ['id', 'ASC']
                ]      
            }) 
            .then(function(productYear){                
                //chequea errores
                 if(errors.errors.length > 0){   
                     // SIGO CON ERROR FANTASMA          
                     res.render("altaYearDb", {errorsProd: errors.mapped(),array:productYear})
                    } 
                    else{                                 
                        console.log("está en else de alta " + req.body.name)           
                        let newYear = {            
                            year_name: req.body.name                      
                        };
                    console.log(newYear.year_name + "es el req.body")
                    db.ProductYear.create(newYear); 
                            res.render("enlacesDB") ;              
                               
                }; // termina el IF                   
                } ) 
            },
    listYear:(req,res) =>{
                let array = [ {
                    id:0,
                    type_name :" "
                }]
                db.ProductYear.findAll({
                    order : [
                        ['id', 'ASC']
                    ]         
                }) 
                .then(function(productYears){
                    if (productYears) {
                    res.render('listYearDb', {array:productYears});}
                    else{
                        res.render("listYearDb",{array})
                    }
                }); 
    },
    deleteYear: (req,res) =>{ 
        db.ProductYear.destroy({
            where:{
                id: req.params.id
            }
        })
        .then (function(){
            res.send("baja existosa")
     } ) 
    },

    altaColection:(req,res) =>{
        let array = [ {
            id:0,
            year_name :" "
        }]
        db.ProductColection.findAll({
            order : [
                ['id', 'ASC']
            ]         
        }) 
        .then(function(productColections){
            if (productColections) {
            res.render('altaColectionDb', {array:productColections});}
            else{
                res.render("altaColectionDb",{array})
            }
        }); 
    },
    creaColection: (req,res) =>{
        // inicializo Variables
        let array = [ {
            id:0,
            colection_name :" "
        }] ;        
        const errors = validationResult(req);        
        console.log("la lenght de errores es : " + errors.errors.length)
        
        //    
        db.ProductColection.findAll({
                order : [
                    ['id', 'ASC']
                ]      
            }) 
            .then(function(productColections){                
                //chequea errores
                 if(errors.errors.length > 0){   
                           
                     res.render("altaColectionDb", {errorsProd: errors.mapped(),array:productColections})
                    } 
                    else{                                 
                        console.log("está en else de alta " + req.body.name)           
                        let newColection = {            
                            colection_name: req.body.name                      
                        };
                    console.log(newColection.colection_name + "es el req.body")
                    db.ProductColection.create(newColection); 
                            res.render("enlacesDB") ;              
                               
                }; // termina el IF                   
                } ) 
            },
    listColection:(req,res) =>{
                let array = [ {
                    id:0,
                    type_name :" "
                }]
                db.ProductColection.findAll({
                    order : [
                        ['id', 'ASC']
                    ]         
                }) 
                .then(function(productColections){
                    if (productColections) {
                    res.render('listColectionDb', {array:productColections});}
                    else{
                        res.render("listColectionDb",{array})
                    }
                }); 
    },
    deleteColection: (req,res) =>{ 
        db.ProductColection.destroy({
            where:{
                id: req.params.id
            }
        })
        .then (function(){
            res.send("baja existosa")
     } ) 
    },      
    altaColor:(req,res) =>{
        let array = [ {
            id:0,
            year_name :" "
        }]
        db.ProductColor.findAll({
            order : [
                ['id', 'ASC']
            ]         
        }) 
        .then(function(productColors){
            if (productColors) {
            res.render('altaColorDb', {array:productColors});}
            else{
                res.render("altaColorDb",{array})
            }
        }); 
    },
    creaColor: (req,res) =>{
        // inicializo Variables
        let array = [ {
            id:0,
            color_name :" ",
            color_image:" "
        }] ;        
        const errors = validationResult(req);        
        console.log("la lenght de errores es : " + errors.errors.length)
        
        //    
        db.ProductColor.findAll({
                order : [
                    ['id', 'ASC']
                ]      
            }) 
            .then(function(productColors){                
                //chequea errores
                 if(errors.errors.length > 0){   
                           
                     res.render("altaColorDb", {errorsProd: errors.mapped(),array:productColors})
                    } 
                    else{                                 
                        console.log("está en else de alta " + req.body.name)           
                        let newColor = {            
                            color_name: req.body.name ,
                            color_image:req.body.image                    
                        };
                    console.log(newColor.color_name + "es el req.body")
                    db.ProductColor.create(newColor); 
                            res.render("enlacesDB") ;              
                               
                }; // termina el IF                   
                } ) 
            },
    listColor:(req,res) =>{
                let array = [ {
                    id:0,
                    type_name :" "
                }]
                db.ProductColor.findAll({
                    order : [
                        ['id', 'ASC']
                    ]         
                }) 
                .then(function(productColors){
                    if (productColors) {
                    res.render('listColorDb', {array:productColors});}
                    else{
                        res.render("listColorDb",{array})
                    }
                }); 
    },
    deleteColor: (req,res) =>{ 
        db.ProductColor.destroy({
            where:{
                id: req.params.id
            }
        })
        .then (function(){
            res.send("baja existosa")
     } ) 
    }      
}
module.exports = controller
