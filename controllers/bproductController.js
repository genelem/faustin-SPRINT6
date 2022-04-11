
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
            }       
 
}
module.exports = controller
