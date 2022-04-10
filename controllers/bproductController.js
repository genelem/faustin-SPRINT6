
const fs = require('fs');
const path = require('path');
//const {validationResult, body} = require("express-validator")
const { body} = require("express-validator")

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

    }

}
module.exports = controller
