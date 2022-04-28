const modelCrud = require('../data/modelCrud');
const db = require('../src/database/models');
const userModel = modelCrud("userJson");


function recordarMiddle (req, res , next){
    if(!req.session.usuarioLogueado && req.cookies.usercookie){
        db.User.findByPk(req.cookies.usercookie)
        //let users = userModel.all()
        .then(function(user){                  
            let usuarioLog = {
                id: req.cookies.usercookie,
                nombre:user.first_name,
                apellido:user.last_name,
                mail:user.email,
                categoria : user.id_category,
                cproduct :0
                //avatar: usuarioCookies.avatar,
            }   
 
        req.session.usuarioLogueado = usuarioLog;
        return next()
    })
    }else{
        return next()
    }
}
module.exports = recordarMiddle;



