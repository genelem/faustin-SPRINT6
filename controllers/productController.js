
const fs = require('fs');
const path = require('path');
const { urlencoded } = require("express")
const {validationResult, body} = require("express-validator")
const modelCrud = require('../data/modelCrud');
const res = require('express/lib/response'); 

/*let tableName = fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf-8") */ 
const productModel = modelCrud("productos");  
const userModel = modelCrud("userJson");

const controller = {
    detail: (req, res) => {
       /*busco producto */
        let id=req.params.id;
        console.log(id)
        let producto = productModel.find(id);  
        console.log(producto.name)
        console.log(producto.id)
        /*busco relacionados*/         
        let filtrados = productModel.findSimilares(id);
        /*solo puede imprimir 3 relacionados */
        let fin = 0;
        if (filtrados.length !== 0 ){
            if (filtrados.length >3) {
                fin = 3
            }
            else {fin = filtrados.length}           
        }
        console.log(filtrados)          
        res.render("detallProdNuevo",{producto,filtrados,fin});
    },
    /*irCarrito: (req,res) => {
        res.render("irCarrito")
    },*/
    carrito: (req,res) => {
        res.render("carritoDeCompras")
    },
    finCarrito: (req,res) => {
        res.render("finCarrito")
    }, 
    list: (req,res) => {
        let productsFound = productModel.all();
        res.render("listProductos",{products:productsFound})
    },  
    detailOne : (req,res) =>{
        let id = req.params.id
        console.log(id + "  es el id a modificar estoy en detailOne")
        let producto = productModel.find(id); 
  
        res.render("updateProducto",{producto:producto}) 
    }, 
    storeUpdate : (req,res) =>{
        // *********** IMPORTANTE **************
       //tengo que actualizar los checkbox para evitar que lo tengan que tildar
       //hasta que esté la base de datos con tipos/coleccion y color lo hago standard. LUEGO MODIFICAR        
       // IMPORTANTE 
        let id = req.params.id         
        const errors = validationResult(req);        
        console.log("la lenght de errores es : " + errors.errors.length)
        if(errors.errors.length > 1){
            let producto = productModel.find(id); 
            res.render("updateProducto", {errorsProd: errors.mapped(),producto:producto})
        };
        // acordarse de error oculto por eso el 1 
        if (errors.errors.length == 1 ){         
                     
            let updateProduct = {  
                id :id,          
                name: req.body.name ,
                description :req.body.description,
                description2 :req.body.description2,
                description3 : req.body.description3, 
                price: req.body.price,
                descuento :req.body.descuento,
                colection :req.body.colection,
                anio: req.body.anio,
                color : req.body.color,
                tipo : req.body.tipo,
                cantidad : req.body.cantidad 
                };            
  
                let data = productModel.update(updateProduct);            
                res.send("modificación exitosa " )
        }; /*acá termina el else */ 
    },      
    bajaProducto: (req,res) =>{ 
        /* reconfirmar que quiere dar de baja */ 
        let id = req.params.id
        let producto = productModel.find(id); 
                         
        res.render("bajaProducto",{producto:producto})
    }, 
    storeDelete : (req,res) =>{
            let id= req.body.id
            productModel.delete(id); 
            res.send("baja existosa")
    },   
    altaP: (req,res) => {        
        let autorizacion = userModel.find(req.session.usuarioLogueado.id)       
        if (autorizacion.categoria !== "administrador"){
            res.send("NO ESTÁ AUTORIZADO A REALIZAR ESTA OPERACIÓN")
        } 
        else{res.render("altaProducto")}
    },   
    storeAlta: (req,res) =>{        

        const errors = validationResult(req);        
        console.log("la lenght de errores es : " + errors.errors.length)
        if(errors.errors.length > 1){
            /*ver esto porque hay un error que no encuentro y puse 1 */
            console.log("los errores en store Alta son: " )
            console.log(errors.errors.name + "error en el nombre del producto")
            console.log(errors.errors.description + "description")
            console.log(errors.errors.description2 + "error descriocion 2")
            console.log(errors.errors.price + "price")
            console.log(errors.errors.anio + "error en anio")
            console.log(errors.errors.color + "error color")
            console.log(errors.errors.colection + "error en colection")
            console.log(errors.errors.tipo + "error en tipo")
            console.log(errors.errors.cantidad + "error en cantidad")

            /*armo valores para modificar falta CUANDO HAGA MODIFICAFR */
            res.render("altaProducto", {errorsProd: errors.mapped()})
             };
         if (errors.errors.length == 1 ){         
            console.log("está en else de alta " + req.body.name)           
            let newProduct = {            
                name: req.body.name ,
                description :req.body.description,
                description2 :req.body.description2,
                description3 : req.body.description3, 
                price: req.body.price,
                descuento :req.body.descuento,
                colection :req.body.colection,
                anio: req.body.anio,
                color : req.body.color,
                tipo : req.body.tipo,
                cantidad : req.body.cantidad 
                };
            
                console.log (newProduct.name + " es el nombre del producto alta");
                console.log(newProduct.colection + newProduct.color + newProduct.tipo + newProduct.price)
                let data = productModel.create(newProduct);                 
                res.render ("altaProducto",{data})                    
        }; /*acá termina el else */ 
    },
    ofertas: (req,res) => {
        res.render("ofertas")
    },     
};

module.exports = controller;