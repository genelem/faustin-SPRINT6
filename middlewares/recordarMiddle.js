const modelCrud = require('../data/modelCrud');
const userModel = modelCrud("userJson");


function recordarMiddle (req, res , next){
    if(!req.session.usuarioLogueado && req.cookies.user){
        let users = userModel.all()
        const usuarioCookies = users.find(function(user){
            return user.id == req.cookies.user
        })

        let user = {
            id: usuarioCookies.id,
           // nombre: usuarioCookies.primerNombre,
            nombre:usuarioCookies.nombre,
            apellido: usuarioCookies.apellido,
            //avatar: usuarioCookies.avatar,
        }

        req.session.usuarioLogueado = user;

        return next()

    }else{
        return next()
    }
}
module.exports = recordarMiddle;



