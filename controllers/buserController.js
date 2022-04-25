const fs = require("fs");
const path = require("path");
const { urlencoded } = require("express");
const { validationResult, body } = require("express-validator");
//const modelCrud = require('../data/modelCrud');
const bcrypt = require("bcryptjs");
const res = require("express/lib/response");
const { redirect } = require("express/lib/response");

const db = require("../src/database/models");
const sequelize = db.sequelize;

//const userModel = modelCrud("userJson");
// función validar Contraseña
function validarContraseña(userID, bodycontraseña) {
  // con idUsuario  verifica contraseña
  let contraseñaGuardada = userID.password;
  console.log(contraseñaGuardada + "es contraseña guardada");
  return bcrypt.compareSync(bodycontraseña, contraseñaGuardada);
}
//************************** */
const controller = {
  altaCategory: (req, res) => {
    let array = [
      {
        id: 0,
        category_name: " ",
      },
    ];
    db.UserCategory.findAll({}).then(function (userCategorys) {
      if (userCategorys) {
        res.render("altaCategoryDb", { array: userCategorys });
      } else {
        res.render("altaCategoryDb", { array });
      }
    });
  },
  creaCategory: (req, res) => {
    // inicializo Variables
    let array = [
      {
        id: 0,
        category_name: " ",
      },
    ];
    const errors = validationResult(req);
    console.log("la lenght de errores es : " + errors.errors.length);

    //
    db.UserCategory.findAll().then(function (userCategorys) {
      //chequea errores
      if (errors.errors.length > 0) {
        res.render("altaCategoryDb", {
          errorsProd: errors.mapped(),
          array: userCategorys,
        });
      } else {
        console.log("está en else de alta " + req.body.name);
        let newCategory = {
          category_name: req.body.name,
        };
        console.log(newCategory.category_name + "es el req.body");
        db.UserCategory.create(newCategory);
        res.render("enlacesDB");
      } // termina el IF
    });
  },
  listCategory: (req, res) => {
    let array = [
      {
        id: 0,
        category_name: " ",
      },
    ];
    db.UserCategory.findAll().then(function (userCategorys) {
      if (userCategorys) {
        res.render("listCategoryDb", { array: userCategorys });
      } else {
        res.render("listCategoryDb", { array });
      }
    });
  },
  deleteCategory: (req, res) => {
    db.UserCategory.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function () {
      res.send("baja existosa");
    });
  },
  login: (req, res) => {
    res.render("loginDB");
  },
  processLogin: (req, res) => {
    const errors = validationResult(req);

    if (errors.errors.length > 0) {
      res.render("loginDB", { errorsLogin: errors.mapped() });
    }
    console.log("en register el req.usuario=" + req.body.usuario);
    //let userID =  userModel.findUser(req.body.usuario);
    db.User.findOne({
      where: {
        userName: req.body.usuario,
      },
    }).then(function (user) {
      // return ({
      if (user) {
        console.log("entró en IF usuario luego de promesa");
        console.log(req.body.contraseña);
        let bodycontraseña = req.body.contraseña;
        let result = validarContraseña(user, bodycontraseña);
        console.log(result);
        if (validarContraseña(user, bodycontraseña)) {
          if (req.body) {
            // aquí buscar el id de categoría.
            //proceso session
            let userlog = {
              //aquí
              id: user.id,
              usuario: req.body.usuario,
              primerNombre: user.first_name,
              apellido: user.last_name,
              mail: user.email,
              fechaNacimiento: user.bornDate,
              categoria: user.id_category,
              cproduct :0,
              //avatar: userFound.avatar,
            };

            req.session.usuarioLogueado = userlog;
            console.log(
              "en alta P.usuarioLogueado" + req.session.usuarioLogueado
            );

            if (req.body.recordame) {
              res.cookie("user", user.id, { maxAge: 50000 * 24 });
            }
            res.redirect("/");
          }
        } else {
          res.send("Credenciales Incorrectas");
        }
      }
    });
  },

  forgot: (req, res) => {
    res.render("loginOlvideDB");
  },

  activarSesion: (req, res) => {
    let errors = [];
    errors = validationResult(req);
    if (errors.errors.length > 0) {
      return res.render("loginOlvideDB", { errorsOlvido: errors.mapped() });
    }
    res.render("loginDB");
  },
  register: (req, res) => {
    res.render("formularioRegistroDb");
  },
  altaRegister: (req, res) => {
    let errors = [];
    errors = validationResult(req);
    console.log(errors.errors.length + "errores length");
    if (errors.errors.length > 0) {
      return res.render("formularioRegistroDb", { errorsReg: errors.mapped() });
    } else {
      console.log("entró al else en alta");
      db.UserCategory.findOne({
        where: {
          category_name: req.body.categoria,
        },
      }).then(function (userCategory) {
        return db.User.create({
          userName: req.body.usuario,
          first_name: req.body.primerNombre,
          last_name: req.body.apellido,
          email: req.body.mail,
          bornDate: req.body.fechaNacimiento,
          id_category: userCategory.id,
          // fechaAlta: fecha,
          //req.file ? req.file.filename : "image-default"
          password: bcrypt.hashSync(req.body.contraseña, 10),
          avatar: req.file ? req.file.filename : "DEFAULT.jpg",
        });
        //.then (function(){
        //  res.send("alta existosa") } )
      });
    }
    res.redirect("/busers/login");
    //res.redirect("/")
    //res.render("loginDB")
  },
  list: function (req, res) {
    db.User.findOne({
      where: {
        id: req.session.usuarioLogueado.id,
      },
    }).then(function (user) {
      if (user.id_category !== 2) {
        res.send("NO ESTÁ AUTORIZADO A REALIZAR ESTA OPERACIÓN");
      } else {
        db.User.findAll().then(function (users) {
          res.render("listUsuariosDB", { array: users });
        });
      }
    });
  },
  detailOne: function (req, res) {
    let usuario = db.User.findOne({
      where: {
        id: req.params.id,
      },
    });
    let categorias = db.UserCategory.findAll();
    Promise.all([usuario, categorias]).then(function ([user, categorias]) {
      return res.render("updateUsuarioDB", {
        user: user,
        categorias: categorias,
      });
    });
  },
  storeUpdate: function (req, res) {
    let id = req.params.id;
    console.log(id + "  es el id a modificar estoy en detailOne");
    let errors =[];
        errors = validationResult(req);   
        if(errors.errors.length > 0){
            let usuario = db.User.findOne({
                where: {
                  id: req.params.id,
                },
              });
              let categorias = db.UserCategory.findAll();
              Promise.all([usuario, categorias]).then(function ([user, categorias]) {
                return res.render("updateUsuarioDB", {
                  user: user,
                  categorias:categorias,
                  errorsUp: errors.mapped()
                });
              });
           //return res.render("updateUsuarioDB", {errorsUp: errors.mapped()})
        } else {
    db.User.update(
      {
        first_name: req.body.primerNombre,
        last_name: req.body.apellido,
        email: req.body.mail,
        //avatar: req.body.avatar,
        bornDate: req.body.fechaNacimiento,
        id_category: req.body.categoria,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then(function () {
        return db.User.findByPk(req.params.id);
      })
      .then(function () {
        return res.send("modificación exitosa");
      });
      ////******* ahora actualizo la tabla PRODUCTCOLORPRODUCT
      
        }
  },
  baja: function (req, res) {
    // usuario = session.usuarioLogueado.usuario
    // console.log(usuario + "  es el req.session.usuario")
    res.render("borrarUsuario");
  },
  delete: function (req, res) {
    let errors = [];
    errors = validationResult(req);
    if (errors.errors.length > 0) {
      return res.render("borrarUsuario", { errorsOlvido: errors.mapped() });
    }
    let userFound = userModel.findMail(req.body.mail);
    userModel.delete(userFound.id);
    res.redirect("/");
  },
  cambioPass: (req, res) => {
    res.render("loginIrCambioPassDB");
  },
  processLoginCambio: (req, res) => {
    /***** todo igual a LOGIN pero MANDA A PAGINA DE CAMBIAR CONTRASEÑA  */
    const errors = validationResult(req);

    if (errors.errors.length > 0) {
      res.render("loginIrCambioPassDB", { errorsLogin: errors.mapped() });
    }
    /*** */
    db.User.findOne({
      where: {
        userName: req.body.usuario,
      },
    }).then(function (user) {
      // return ({
      if (user) {
        console.log("entró en IF usuario luego de promesa");
        console.log(req.body.contraseña);
        let bodycontraseña = req.body.contraseña;
        let result = validarContraseña(user, bodycontraseña);
        console.log(result);
        if (validarContraseña(user, bodycontraseña)) {
          if (req.body) {
            // aquí buscar el id de categoría.
            //proceso session
            let userlog = {
              //aquí
              id: user.id,
              usuario: req.body.usuario,
              primerNombre: user.first_name,
              apellido: user.last_name,
              mail: user.email,
              fechaNacimiento: user.bornDate,
              categoria: user.id_category,
              //avatar: userFound.avatar,
            };

            req.session.usuarioLogueado = userlog;
            console.log(
              "en alta P.usuarioLogueado" + req.session.usuarioLogueado
            );

            if (req.body.recordame) {
              res.cookie("user", user.id, { maxAge: 50000 * 24 });
            }
            res.render("loginCambiaPassDB", { user: user });
            //res.redirect("/");
          }
        } else {
          res.send("Credenciales Incorrectas");
        }
      }
    });
  },

  forgot: (req, res) => {
    res.render("loginOlvideDB");
  },

  activarSesion: (req, res) => {
    let errors = [];
    errors = validationResult(req);
    if (errors.errors.length > 0) {
      return res.render("loginOlvideDB", { errorsOlvido: errors.mapped() });
    }
    res.render("loginDB");
    /************************************* */
    let userID = userModel.findUser(req.body.usuario);
    //if (validarContraseña(userID)){

    let bodycontraseña = req.body.contraseña;

    let resultado = validarContraseña(userID, bodycontraseña);

    if (validarContraseña(userID, bodycontraseña)) {
      if (req.body) {
        //proceso session
        let user = {
          //aquí
          id: userID.id,
          usuario: req.body.usuario,
          primerNombre: req.body.primerNombre,
          apellido: req.body.apellido,
          mail: req.body.mail,
          fechaNacimiento: req.body.fechaNacimiento,
          categoria: req.body.categoria,
          //avatar: .avatar
        };

        req.session.usuarioLogueado = user;

        if (req.body.recordame) {
          res.cookie("user", user.id, { maxAge: 50000 * 24 });
        }

        res.render("loginCambiaPassDB", { user: user });
      }
    } else {
      res.send("Credenciales Incorrectas");
    }
  },
  processCambioP: (req, res) => {
    const errors = validationResult(req);
    /*** */
    if (errors.errors.length > 0) {
      res.render("loginCambiaPassDB", { errorsLogin: errors.mapped() });
    } else {
      if (req.body.contraseña1 !== req.body.contraseña2) {
        res.send("contraseñas Ingresadas SON DISTINTAS ");
      }
    }
    //**** */
    console.log(req.session.usuarioLogueado.id + "  es  el ID");
    //let userID =  userModel.find(req.session.usuarioLogueado.id);
    db.User.findByPk(req.session.usuarioLogueado.id).then(function (user) {
      if (user && validarContraseña(user, req.body.contraseña1)) {
        res.send("NUEVA CONTRASEÑA debe ser DIFERENTE a la registrada");
      } else {
        db.User.update(
          {
            first_name: req.body.primerNombre,
            last_name: req.body.apellido,
            email: req.body.mail,
            password: bcrypt.hashSync(req.body.contraseña1, 10),
            //avatar: req.body.avatar,
            bornDate: req.body.fechaNacimiento,
            id_category: req.body.categoria,
          },
          {
            where: {
              id: req.session.usuarioLogueado.id,
            },
          }
        )
          .then(function () {
            return db.User.findByPk(req.session.usuarioLogueado.id);
          })
          .then(function () {
            return res.send("modificación exitosa");
          });
      }
    });
    res.redirect("/");
  },
  
  regTaxes: function (req, res) {
    // usuario = session.usuarioLogueado.usuario
    // console.log(usuario + "  es el req.session.usuario")
    // res.render("confirmaLogout")
    res.render("formularioTaxesDB");
  },
  ConfirmLogout: function (req, res) {
    // usuario = session.usuarioLogueado.usuario
    // console.log(usuario + "  es el req.session.usuario")
    // res.render("confirmaLogout")
    res.send("LOGOUT EN CONSTRUCCIÓN ");
  },
  logout: function (req, res) {
    res.send("LOGOUT EN CONSTRUCCIÓN ");
    //req.session.destroy();
    //res.clearCookie("user");
    //res.redirect("/");
  },
};

module.exports = controller;
