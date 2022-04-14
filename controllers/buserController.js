const fs = require('fs');
const path = require('path');
const { urlencoded } = require("express")
const {validationResult, body} = require("express-validator")
const modelCrud = require('../data/modelCrud');
const bcrypt = require("bcryptjs")
const res = require('express/lib/response');
const { redirect } = require('express/lib/response');

const userModel = modelCrud("userJson");
// función validar Contraseña
function validarContraseña(userID,bodycontraseña){     
       // con idUsuario  verifica contraseña         
    let contraseñaGuardada = userID.contraseña;  
    return bcrypt.compareSync(bodycontraseña,contraseñaGuardada)
}
//************************** */
const controller = {
    
    login: (req,res) =>{            
        res.render("login")
    }, 
    processLogin :(req,res) =>{
        const errors = validationResult(req);        
        
        if(errors.errors.length > 0){
            res.render("login", {errorsLogin: errors.mapped()})
        }    
        console.log("en register el req.usuario="+ req.body.usuario)
        let userID =  userModel.findUser(req.body.usuario); 
        //if (validarContraseña(userID)){
       
        let bodycontraseña= req.body.contraseña;
      
        let resultado= validarContraseña(userID,bodycontraseña);
      
        if (validarContraseña(userID,bodycontraseña)){
           
             if (req.body) {
                //proceso session
                let user = {
                //aquí
                    id: userID.id,
                    usuario :req.body.usuario,
                    primerNombre: req.body.primerNombre,
                    apellido: req.body.apellido,
                    mail: req.body.mail,
                    fechaNacimiento:req.body.fechaNacimiento,
                    categoria: req.body.categoria          
                    //avatar: userFound.avatar,
                    }

                req.session.usuarioLogueado = user
                console.log("en alta P.usuarioLogueado" + req.session.usuarioLogueado)

                if(req.body.recordame){
                res.cookie("user", user.id, {maxAge: 50000 * 24})
                }
                res.redirect("/");
                
        }
        }else{
            
            res.send("Credenciales Incorrectas")
        } 
    },
    
    forgot: (req,res) =>{        
        res.render("loginOlvide")
    },  
    
    activarSesion: (req,res) =>{ 
        let errors =[];
        errors = validationResult(req);       
        if(errors.errors.length > 0){
           return res.render("loginOlvide", {errorsOlvido: errors.mapped()})
        }          
        res.render("login")
    }, 
    register: (req,res) =>{
        res.render("formularioRegistro")
    },
    altaRegister: (req,res) =>{
        let errors =[];
        errors = validationResult(req); 
        console.log(errors.errors.length + "errores length")
        if(errors.errors.length > 0){
           return res.render("formularioRegistro", {errorsReg: errors.mapped()})
        }      
        
        else {
            console.log("entró al else en alta")
            //let fecha = date.now() igual después usaré timesstamp
            let userAlta = {   
                usuario: req.body.usuario,             
                primerNombre: req.body.primerNombre,
                apellido: req.body.apellido,
                mail: req.body.mail,
                fechaNacimiento:req.body.fechaNacimiento,
                categoria: req.body.categoria,
               // fechaAlta: fecha,
               //req.file ? req.file.filename : "image-default"
                contraseña: bcrypt.hashSync(req.body.contraseña, 10),               
                avatar: req.file ? req.file.filename :"DEFAULT.jpg"
            }
            console.log(req.body.contraseña + "es la que voy a encriptar")
            console.log(userAlta.contraseña)
            userModel.create(userAlta);
        
            res.redirect("/users/login")};         
    },
    
    list:function(req, res){
        let autorizacion = userModel.find(req.session.usuarioLogueado.id)       
        if (autorizacion.categoria !== "administrador"){
            res.send("NO ESTÁ AUTORIZADO A REALIZAR ESTA OPERACIÓN")
        } 
        else {let usersFound = userModel.all();  
        console.log(usersFound) ;           
        res.render("listadoUsuarios",{users:usersFound}); }
    } ,   
    detailOne:function(req, res){
        let errors =[];
        errors = validationResult(req); 
          
        if(errors.errors.length > 0){
           return res.render("updateUsuario", {errorsUp: errors.mapped()})
        }    
        else {
            let id = req.params.id
            console.log(id + "  es el id a modificar estoy en detailOne")
            let user = userModel.find(id); 
       
            res.render("updateUsuario",{user:user}) 
        }
    },  
    storeUpdate: function(req,res){
        let id = req.params.id
        console.log(id + "  es el id a modificar estoy en detailOne")
      
        let user = userModel.find(id); 
        console.log("en storeUpdate el usuario es :" + user.id)
        console.log("storeUpdate "+ user.usuario)
        let userMod = {
            id:user.id,
            usuario:user.usuario,
            contraseña : user.contraseña,
            primerNombre:req.body.primerNombre,
            apellido : req.body.apellido,
            mail: req.body.mail,
            //avatar: req.body.avatar,
            fechaNacimiento:req.body.fechaNacimiento,
            categoria: req.body.categoria
        }  
        userModel.update(userMod);   
        res.redirect("/");
    },
    baja:function(req, res){
        // usuario = session.usuarioLogueado.usuario
        // console.log(usuario + "  es el req.session.usuario")
         res.render("borrarUsuario")  
     },   
     delete:function(req, res){
        let errors =[];
        errors = validationResult(req);       
        if(errors.errors.length > 0){
           return res.render("borrarUsuario", {errorsOlvido: errors.mapped()})
        }  
        let userFound= userModel.findMail(req.body.mail);
        userModel.delete(userFound.id);
        res.redirect("/")        
       
    }, 
    cambioPass: (req,res) =>{
        res.render("loginIrCambioPass")
    },
    processLoginCambio :(req,res) =>{
        /***** todo igual a LOGIN pero MANDA A PAGINA DE CAMBIAR CONTRASEÑA  */
        const errors = validationResult(req);        
        
        if(errors.errors.length > 0) {
            res.render("loginIrCambioPass", {errorsLogin: errors.mapped()})
        }  
        
     
        let userID =  userModel.findUser(req.body.usuario); 
        //if (validarContraseña(userID)){
       
        let bodycontraseña= req.body.contraseña;
      
        let resultado= validarContraseña(userID,bodycontraseña);
      
        if (validarContraseña(userID,bodycontraseña)){
           
             if (req.body) {
                //proceso session
                let user = {
                //aquí
                    id: userID.id,
                    usuario :req.body.usuario,
                    primerNombre: req.body.primerNombre,
                    apellido: req.body.apellido,
                    mail: req.body.mail,
                    fechaNacimiento:req.body.fechaNacimiento,
                    categoria: req.body.categoria,          
                    //avatar: .avatar
                    }

                req.session.usuarioLogueado = user
                
                if(req.body.recordame){
                res.cookie("user", user.id, {maxAge: 50000 * 24})
                }
              
                res.render("loginCambiaPass",{user:user});
                
        }
        }else{
            
            res.send("Credenciales Incorrectas")
        } 
    },
    processCambioP: (req,res) =>{
        const errors = validationResult(req);        
        
        if(errors.errors.length > 0){
            res.render("loginCambiaPass", {errorsLogin: errors.mapped()})
        } 
        else { 
            if( req.body.contraseña1 !== req.body.contraseña2 ){
            res.send ("contraseñas Ingresadas SON DISTINTAS ")
        } ;} ;
        console.log(req.session.usuarioLogueado.id + "  es  el ID")
        let userID =  userModel.find(req.session.usuarioLogueado.id); 
        if ((userID) && (validarContraseña(userID,req.body.contraseña1)) ){
           
                res.send("NUEVA CONTRASEÑA debe ser DIFERENTE a la registrada")
            }
            else {
                let user = {
                    //aquí
                        id: userID.id,
                        usuario :userID.usuario,
                        primerNombre: userID.primerNombre,
                        apellido: userID.apellido,
                        mail: userID.mail,
                        fechaNacimiento:userID.fechaNacimiento,
                        categoria: userID.categoria, 
                        contraseña : bcrypt.hashSync(req.body.contraseña1, 10),         
                        avatar: userID.avatar
                        }
                 userModel.update(user) 
                 res.redirect("/") 
            } ;        
    },   
    
    ConfirmLogout:function(req, res){
        // usuario = session.usuarioLogueado.usuario
        // console.log(usuario + "  es el req.session.usuario")
        // res.render("confirmaLogout")  
        res.send("LOGOUT EN CONSTRUCCIÓN ")
     },          
    logout:function(req, res){
        res.send("LOGOUT EN CONSTRUCCIÓN ")
        //req.session.destroy();       
        //res.clearCookie("user");
        //res.redirect("/");
    }
};

module.exports = controller;