
const fs = require('fs');
const path = require('path');
//const {validationResult, body} = require("express-validator")
const { validationResult,body} = require("express-validator")

const db = require('../src/database/models');
const sequelize = db.sequelize;

const controller = {
    enlaces: (req,res) =>{
        res.render("enlacesDB")
    },
    altaType:(req,res) =>{
        db.ProductType.findAll({
            order : [
                ['id', 'ASC']
            ],
            limit: 8
        }) 
        .then(function(productTypes){
            res.render('altaTypeDb', {productTypes});
        }); 
    },
    creaType: (req,res) =>{
        const errors = validationResult(req);        
        console.log("la lenght de errores es : " + errors.errors.length)
        if(errors.errors.length > 0){
            res.render("altaTypeDb", {errorsProd: errors.mapped()})
             }; 
        if (errors.errors.length == 0 ){         
            console.log("está en else de alta " + req.body.name)           
            let newType = {            
                name: req.body.name                      
                };
             db.ProductType.create(newType); 
                res.redirect("enlacesDB") ;               
                   
             }; // termina el else
    },
}
module.exports = controller
