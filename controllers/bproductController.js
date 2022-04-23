const fs = require("fs");
const path = require("path");
//const {validationResult, body} = require("express-validator")
const { validationResult, body } = require("express-validator");

const db = require("../src/database/models");

const sequelize = db.sequelize;

/*function buscarEnProductColor(color){
    db.ProductColor.findOne({
        where : {
            color_name:color
        }
    }).then( (productColor) =>{
        return productColor.id
    } );
}
function buscarEnProductYear(year){
     db.ProductYear.findOne({
        where : {
            year_name:year
        }
    }).then( (productYear) =>{
        if (!productYear){
            console.log("no encontró year")
        }
         else{
            
             console.log(productYear.id)
             
         }
        return productYear.id
    } );
}
function buscarEnProductType(type){
     db.ProductType.findOne({
        where : {
            type_name:type
        }
    }).then( (productType) =>{
        console.log("en función type es "+ productType.id)
        return productType.id
    } );
}
function buscarEnProductColection(colection){
    console.log("entró a buscar colección")
    console.log("valor de :" + colection)
    db.ProductColection.findOne({
       where : {
           colection_name:colection
       }
   }).then( (productColection) =>{
       console.log(productColection.id+ "en función es")
       return productColection.id
   } );
}   */

const controller = {
  enlaces: (req, res) => {
    res.render("enlacesDB");
  },
  altaType: (req, res) => {
    let array = [
      {
        id: 0,
        type_name: " ",
      },
    ];
    db.ProductType.findAll({
      order: [["id", "ASC"]],
    }).then(function (productTypes) {
      if (productTypes) {
        res.render("altaTypeDb", { array: productTypes });
      } else {
        res.render("altaTypeDb", { array });
      }
    });
  },
  creaType: (req, res) => {
    // inicializo Variables
    let array = [
      {
        id: 0,
        type_name: " ",
      },
    ];
    const errors = validationResult(req);
    console.log("la lenght de errores es : " + errors.errors.length);

    //
    db.ProductType.findAll({
      order: [["id", "ASC"]],
    }).then(function (productTypes) {
      //chequea errores
      if (errors.errors.length > 0) {
        // SIGO CON ERROR FANTASMA
        res.render("altaTypeDb", {
          errorsProd: errors.mapped(),
          array: productTypes,
        });
      } else {
        console.log("está en else de alta " + req.body.name);
        let newType = {
          type_name: req.body.name,
        };
        console.log(newType.type_name + "es el req.body");
        db.ProductType.create(newType);
        res.render("enlacesDB");
      } // termina el IF
    });
  },
  listType: (req, res) => {
    let array = [
      {
        id: 0,
        type_name: " ",
      },
    ];
    db.ProductType.findAll({
      order: [["id", "ASC"]],
    }).then(function (productTypes) {
      if (productTypes) {
        res.render("listTypeDb", { array: productTypes });
      } else {
        res.render("listTypeDb", { array });
      }
    });
  },
  deleteType: (req, res) => {
    db.ProductType.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function () {
      res.send("baja existosa");
    });
  },
  altaYear: (req, res) => {
    let array = [
      {
        id: 0,
        year_name: " ",
      },
    ];
    db.ProductYear.findAll({
      order: [["id", "ASC"]],
    }).then(function (productYears) {
      if (productYears) {
        res.render("altaYearDb", { array: productYears });
      } else {
        res.render("altaYearDb", { array });
      }
    });
  },
  creaYear: (req, res) => {
    // inicializo Variables
    let array = [
      {
        id: 0,
        year_name: " ",
      },
    ];
    const errors = validationResult(req);
    console.log("la lenght de errores es : " + errors.errors.length);

    //
    db.ProductYear.findAll({
      order: [["id", "ASC"]],
    }).then(function (productYear) {
      //chequea errores
      if (errors.errors.length > 0) {
        // SIGO CON ERROR FANTASMA
        res.render("altaYearDb", {
          errorsProd: errors.mapped(),
          array: productYear,
        });
      } else {
        console.log("está en else de alta " + req.body.name);
        let newYear = {
          year_name: req.body.name,
        };
        console.log(newYear.year_name + "es el req.body");
        db.ProductYear.create(newYear);
        res.render("enlacesDB");
      } // termina el IF
    });
  },
  listYear: (req, res) => {
    let array = [
      {
        id: 0,
        type_name: " ",
      },
    ];
    db.ProductYear.findAll({
      order: [["id", "ASC"]],
    }).then(function (productYears) {
      if (productYears) {
        res.render("listYearDb", { array: productYears });
      } else {
        res.render("listYearDb", { array });
      }
    });
  },
  deleteYear: (req, res) => {
    db.ProductYear.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function () {
      res.send("baja existosa");
    });
  },

  altaColection: (req, res) => {
    let array = [
      {
        id: 0,
        year_name: " ",
      },
    ];
    db.ProductColection.findAll({
      order: [["id", "ASC"]],
    }).then(function (productColections) {
      if (productColections) {
        res.render("altaColectionDb", { array: productColections });
      } else {
        res.render("altaColectionDb", { array });
      }
    });
  },
  creaColection: (req, res) => {
    // inicializo Variables
    let array = [
      {
        id: 0,
        colection_name: " ",
      },
    ];
    const errors = validationResult(req);
    console.log("la lenght de errores es : " + errors.errors.length);

    //
    db.ProductColection.findAll({
      order: [["id", "ASC"]],
    }).then(function (productColections) {
      //chequea errores
      if (errors.errors.length > 0) {
        res.render("altaColectionDb", {
          errorsProd: errors.mapped(),
          array: productColections,
        });
      } else {
        console.log("está en else de alta " + req.body.name);
        let newColection = {
          colection_name: req.body.name,
        };
        console.log(newColection.colection_name + "es el req.body");
        db.ProductColection.create(newColection);
        res.render("enlacesDB");
      } // termina el IF
    });
  },
  listColection: (req, res) => {
    let array = [
      {
        id: 0,
        colection_name: " ",
      },
    ];
    db.ProductColection.findAll({
      order: [["id", "ASC"]],
    }).then(function (productYears) {
      if (productColections) {
        res.render("listColectionDb", { array: productColections });
      } else {
        res.render("listColectionDb", { array });
      }
    });
  },
  deleteYear: (req, res) => {
    db.ProductYear.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function () {
      res.send("baja existosa");
    });
  },
  Colection: (req, res) => {
    let array = [
      {
        id: 0,
        type_name: " ",
      },
    ];
    db.ProductColection.findAll({
      order: [["id", "ASC"]],
    }).then(function (productColections) {
      if (productColections) {
        res.render("listColectionDb", { array: productColections });
      } else {
        res.render("listColectionDb", { array });
      }
    });
  },
  deleteColection: (req, res) => {
    db.ProductColection.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function () {
      res.send("baja existosa");
    });
  },
  altaColor: (req, res) => {
    let array = [
      {
        id: 0,
        year_name: " ",
      },
    ];
    db.ProductColor.findAll({
      order: [["id", "ASC"]],
    }).then(function (productColors) {
      if (productColors) {
        res.render("altaColorDb", { array: productColors });
      } else {
        res.render("altaColorDb", { array });
      }
    });
  },
  creaColor: (req, res) => {
    // inicializo Variables
    let array = [
      {
        id: 0,
        color_name: " ",
        color_image: " ",
      },
    ];
    const errors = validationResult(req);
    console.log("la lenght de errores es : " + errors.errors.length);

    //
    db.ProductColor.findAll({
      order: [["id", "ASC"]],
    }).then(function (productColors) {
      //chequea errores
      if (errors.errors.length > 0) {
        res.render("altaColorDb", {
          errorsProd: errors.mapped(),
          array: productColors,
        });
      } else {
        console.log("está en else de alta " + req.body.name);
        let newColor = {
          color_name: req.body.name,
          color_image: req.body.image,
        };
        console.log(newColor.color_name + "es el req.body");
        db.ProductColor.create(newColor);
        res.render("enlacesDB");
      } // termina el IF
    });
  },
  listColor: (req, res) => {
    let array = [
      {
        id: 0,
        type_name: " ",
      },
    ];
    db.ProductColor.findAll({
      order: [["id", "ASC"]],
    }).then(function (productColors) {
      if (productColors) {
        res.render("listColorDb", { array: productColors });
      } else {
        res.render("listColorDb", { array });
      }
    });
  },
  deleteColor: (req, res) => {
    db.ProductColor.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function () {
      res.send("baja existosa");
    });
  },
  altaProduct: (req, res) => {
    //VER LA AUTORIZACIÓN SEGURAMENTE LA PONGO EN ENLACES.. POR AHORA SIN AUTO
    /*    let autorizacion = userModel.find(req.session.usuarioLogueado.id)       
        if (autorizacion.categoria !== "administrador"){
            res.send("NO ESTÁ AUTORIZADO A REALIZAR ESTA OPERACIÓN")
        } 
        else{res.render("altaProductoDb")}*/
    // FALTA VER QUE PASA CON UN PRODUCTO QUE TIENE VARIOS COLORES . ver en VALIDATOR
    let cantidades = [];
    let colors = db.ProductColor.findAll();
    let years = db.ProductYear.findAll();
    let types = db.ProductType.findAll();
    let colections = db.ProductColection.findAll();

    Promise.all([colors, years, types, colections]).then(function ([
      productColors,
      productYears,
      productTypes,
      productColections,
    ]) {
      return res.render("altaProductoDb", {
        colors: productColors,
        years: productYears,
        types: productTypes,
        colections: productColections,
        cantidades,
      });
    });
  },
  creaProduct: (req, res) => {
    const errors = validationResult(req);
    console.log("la lenght de errores es : " + errors.errors.length);
    console.log("en body CreaProduct colection es : " + req.body.colection);
    console.log("en body CreaProduct type es : " + req.body.tipo);
    console.log("en body CreaProduct año es : " + req.body.anio);
    console.log("en body CreaProduct color es : " + req.body.colores);
    console.log("en body el dto es : " + req.body.descuento);

    if (errors.errors.length > 1) {
      /*ver esto porque hay un error que no encuentro y puse 1 */

      /*armo valores para modificar falta CUANDO HAGA MODIFICAFR */

      let colors = db.ProductColor.findAll();
      let years = db.ProductYear.findAll();
      let types = db.ProductType.findAll();
      let colections = db.ProductColection.findAll();

      Promise.all([colors, years, types, colections]).then(function ([
        productColors,
        productYears,
        productTypes,
        productColections,
      ]) {
        return res.render("altaProductoDb", {
          errorsProd: errors.mapped(),
          colors: productColors,
          years: productYears,
          types: productTypes,
          colections: productColections,
        });
      });
    }
    if (errors.errors.length == 1) {
      console.log("está en else de alta " + req.body.name);

      // es temporal este if hasta que arregle el view
      console.log("EL BODY COLORES ES :");
      console.log(req.body.colores);
      db.Product.create({
        name: req.body.name,
        description: req.body.description,
        description2: req.body.description2,
        price: req.body.price,
        //falta tema imagenes
        dto: req.body.descuento,
        //created : new DATE(),
        id_colection: req.body.colection,

        id_product_year: req.body.anio,

        id_type: req.body.tipo,
      })
     
       .then(function (product) {
         // tengo que pasar un array
         //tengo armar el input como una array y modificar en validator
         return product.setColoresDB(req.body.colores);
       })
        .then(function () {
          res.send("alta exitosa ");
        });
    }

    ///******************************************* */
  },
  listarProduct: (req, res) => {
    let array = [];

    db.Product.findAll({
      order: [["id", "ASC"]],
    }).then(function (products) {
      if (products) {
        res.render("listProductsDB", { array: products });
      } else {
        res.render("listProductsDB", { array });
      }
    });
  },
  detailOneDB: (req, res) => {
    let producto = db.Product.findOne({
      where: {
        id: req.params.id,
      },
      //  include :["coloresDB"],
      include: ["pYear", "pColection", "pType", "coloresDB"],
    });
    let colors = db.ProductColor.findAll();
    let years = db.ProductYear.findAll();
    let types = db.ProductType.findAll();
    let colections = db.ProductColection.findAll();

    Promise.all([producto, colors, years, types, colections]).then(function ([
      product,
      productColors,
      productYears,
      productTypes,
      productColections,
    ]) {
      //return  res.json(product)
      return res.render("updateProductoDB", {
        colors: productColors,
        years: productYears,
        types: productTypes,
        colections: productColections,
        producto: product,
      });
    });

    //let producto = productModel.find(id);

    //res.render("updateProductoDB",{producto:producto,colors,years,types,colections})
  },
  storeUpdate: (req, res) => {
   // queda analizar la validación de colores.
    let id = req.params.id         
    const errors = validationResult(req);        
    console.log("la lenght de errores es : " + errors.errors.length)
    if(errors.errors.length > 1){
//*** */
    let producto = db.Product.findOne({
    where: {
      id: req.params.id,
   },
   //  include :["coloresDB"],
    include: ["pYear", "pColection", "pType", "coloresDB"],
  });
  let colors = db.ProductColor.findAll();
  let years = db.ProductYear.findAll();
    let types = db.ProductType.findAll();
  let colections = db.ProductColection.findAll();

  Promise.all([producto, colors, years, types, colections]).then(function ([
    product,
    productColors,
    productYears,
    productTypes,
    productColections,

  ]) {
  //return  res.json(product)
  return res.render("updateProductoDB", {
    colors: productColors,
    years: productYears,
    types: productTypes,
    colections: productColections,
    producto: product,
    errorsProd: errors.mapped()
  });
});

    } else {
    
    // acordarse de error oculto por eso el 1 
    if (errors.errors.length == 1 ){        

            db.Product.update({
                name: req.body.name,
                description: req.body.description,
                description2: req.body.description2,
                price: req.body.price,
                //falta tema imagenes
                dto: req.body.descuento,
                //created : new DATE(),
                id_colection: req.body.colection,
        
                id_product_year: req.body.anio,
        
                id_type: req.body.tipo,
              },{
                  where :{
                    id : req.params.id  
                  },
                
              } )
              .then(function () {
                return db.User.findByPk(req.params.id);
              })
              .then (function(){
                return res.send ("modificación exitosa")
              })
              
               
                  
              } 
               
          
            }
  
  },
  bajaProducto: (req,res) =>{ 
    /* reconfirmar que quiere dar de baja */ 
         /* reconfirmar que quiere dar de baja */ 
         //let id = req.params.id
         //let producto = productModel.find(id); 
         db.Product.findByPk(req.params.id) 
         .then(function(product){
            res.render("bajaProductoDB",{producto:product})
         })                
        
    
//llamo a la tabla pivot
        //elimino todos los registros de la tabla pivot que tengan el id 

  } ,       
storeDelete : (req,res) =>{
     //llamo a la tabla pivot
        //elimino todos los registros de la tabla pivot que tengan el id 
        console.log(req.params.id)
        db.ProductColorProduct.destroy({
            where:{
                id_product: req.params.id
            }
        })
        .then(function(){
        //elimino la pelicula
        return db.Product.destroy({
            where:{
                id: req.params.id
            }
        }) } )
        .then(function(){
            return res.send("baja existosa")
        } )

}   
   
}           


module.exports = controller;
