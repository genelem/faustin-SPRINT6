const { urlencoded } = require("express");
const fs = require("fs");
const path = require("path");

const db = require("../src/database/models");

const sequelize = db.sequelize;

const mainControllerDB = {
    home: (req, res) => {
        let producto = db.Product.findAll({
          include: ["pType"]
        })
        let types = db.ProductType.findAll();
        Promise.all([producto,types]).then(function ([
            product,
            productTypes
          ]) {
           //return res.json(product)
            return res.render("homeDB", {
             producto: product,
             types: productTypes  
            }
            );
          }
        )}
    }


module.exports=mainControllerDB;