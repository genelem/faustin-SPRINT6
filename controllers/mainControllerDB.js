const { urlencoded } = require("express");
const fs = require("fs");
const path = require("path");

const db = require("../src/database/models");

const sequelize = db.sequelize;

const mainControllerDB = {
    home: (req, res) => {
        let producto = db.Product.findAll({
          include: ["pType","pYear","pColection"]
        })
        let types = db.ProductType.findAll();
        let colections= db.ProductColection.findAll();
        let anios = db.ProductYear.findAll();
        let colores= db.ProductColor.findAll();
        Promise.all([producto,types,colections,anios,colores]).then(function ([
            product,
            productTypes,
            productColections,
            productYears,
            productColors
          ]) {
           //return res.json(product)
            return res.render("homeDB", {
             producto: product,
             tipos: productTypes,
             colecciones :productColections,
             anios : productYears,
             colores:productColors 
            }
            );
          }
        )}
    }


module.exports=mainControllerDB;