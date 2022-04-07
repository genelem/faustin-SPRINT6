const bcrypt = require("bcryptjs/dist/bcrypt");
const { check, body } = require("express-validator")
const fs = require("fs");
const path = require("path");
const modelCrud = require('../data/modelCrud');
const userModel = modelCrud("userJson");


const validatorU = {
    login:[
        check("usuario")
            .notEmpty()
            .withMessage("Debe ingresar Usuario Registrado")
            .bail()
            .custom(function(value){  
                //busco al usuario
                let userFound= userModel.findUser(value);                            
                //si existe un usuario devuelvo el error
               
                if(userFound == undefined){
                    throw new Error("Usuario Inexistente");
                }
                //sino devuelvo true
                return true
            }),
        check("contraseña")
            .notEmpty()
            .withMessage("Debe Ingresar Contraseña") 
    ],
    register:[
        check('usuario')
        .notEmpty().withMessage ("debe Ingresar USUARIO ")
        .bail()
        .isLength({min:8}). withMessage('Nombre De usuario MINIMO 8 caractres')
        .bail()
        .custom(function(value){  
            //busco al usuario
            console.log("el valor del custom es value = "+ value)
            let userFound = userModel.findUser(value);                            
            //si existe un usuario devuelvo el error
            if(userFound){
                throw new Error("USUARIO  ya registrado!");
            }
            //sino devuelvo true
            return true
        })
        ,
        check('primerNombre')
        .notEmpty().withMessage ("Debe Ingresar NOMBRE ")
        .bail()
        .isLength({min:2}).withMessage('Debe ingresar NOMBRE válido'),        
        check('apellido')
        .notEmpty().withMessage ("Debe Ingresar APELLIDO")
        .bail()
        .isLength({min:2}).withMessage('Debe ingresar un APELLIDO válido'),
        check('contraseña')
        .notEmpty().withMessage ("Ingrese una CONTRASEÑA")
        .bail()
        .isLength({min:5}).withMessage('Contraseña debe ser mínimo 5 caracteres'),        
        check('mail') 
        .notEmpty().withMessage("Email vacio")
        .bail()     
        .isEmail().withMessage('Mail NO Válido')
        .bail()
        .custom(function(value){  
            //busco al usuario
            let userFound= userModel.findMail(value);                            
            //si existe un usuario devuelvo el error
            if(userFound){
                throw new Error("Email ya registrado!");
            }
            //sino devuelvo true
            return true
        })
        ,
        check('fechaNacimiento')
        .notEmpty().withMessage ("Fecha de Nacimiento DEBE SER COMPLETADA ")
        .bail()
        .isDate().withMessage('Fecha Incorrecta '),
        // falta que sea mayor de edad buscar la función que dió AXEL
        check('categoria')
        .notEmpty().withMessage ("Debe ingresar Categoría ")
        .bail()
        .custom(function(value){  
            //valores posibles usuario/administrador                         
            //si existe un usuario devuelvo el error
            console.log("el valor custom-categoria es :" + value)
            if ((value !== "usuario") && (value !== "administrador")){
                throw new Error("Categoría debe ser :usuario o administrador");
            }
            //sino devuelvo true
            return true
        }), 
        check('terminos')
        .notEmpty().withMessage('Debe aceptar Términos y condiciones ')

    ],
    updateUser: [
        /*check('usuario') 
        .notEmpty().withMessage ("debe Ingresar USUARIO ")
        .bail()
        .isLength({min:8}). withMessage('Nombre De usuario MINIMO 8 caractres')
        .bail()
        .custom(function(value){  
            //busco al usuario
            let userFound = userModel.findUser(value);                            
            //si existe un usuario devuelvo el error
            if(userFound){
                throw new Error("USUARIO  ya registrado!");
            }
            //sino devuelvo true
            return true
        })
        , */
        check('primerNombre')
        .notEmpty().withMessage ("Debe Ingresar NOMBRE ")
        .bail()
        .isLength({min:2}).withMessage('Debe ingresar NOMBRE válido'),        
        check('apellido')
        .notEmpty().withMessage ("Debe Ingresar APELLIDO")
        .bail()
        .isLength({min:2}).withMessage('Debe ingresar un APELLIDO válido'),               
        check('mail') 
        .notEmpty().withMessage("Email vacio")
        .bail()     
        .isEmail().withMessage('Mail NO Válido')
        .bail()     
        ,
        check('fechaNacimiento')
        .notEmpty().withMessage ("Fecha de Nacimiento DEBE SER COMPLETADA ")
        .bail()
        .isDate().withMessage('Fecha Incorrecta '),
        // falta que sea mayor de edad buscar la función que dió AXEL
        check('categoria')
        .notEmpty().withMessage ("Debe ingresar Categoría( usuario/administrador) ")
    ],
    olvidoV :[
        check('mail') 
        .notEmpty().withMessage("Email vacio")
        .bail()     
        .isEmail().withMessage('Mail NO Válido')
        .bail()
        .custom(function(value){  
            //busco al usuario
            let userFound= userModel.findMail(value);                            
            //si existe un usuario devuelvo el error
            if (!userFound){
                throw new Error("Este Mail NO ESTÄ REGISTRADO en nuestra Base De Datos");
            }
            //sino devuelvo true
            return true
        })

    ],
    cambioP :[
        check('contraseña1') 
        .notEmpty().withMessage("Complete CONTRASEÑA")         
        .bail()
        .isLength({min:5}).withMessage('Contraseña debe ser mínimo 5 caracteres'),
        check('contraseña2') 
        .notEmpty().withMessage("Debe reconfirmar Contraseña")         
        .bail()
        .isLength({min:5}).withMessage('Contraseña debe ser mínimo 5 caracteres')   
        
    ]
}

module.exports = validatorU