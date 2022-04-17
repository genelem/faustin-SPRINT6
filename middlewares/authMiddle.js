const req = require("express/lib/request");

function authMiddle(req,res,next){
    if (req.session.usuarioLogueado){
        console.log(req.session.usuarioLogueado)
        return next() }
    console.log("en elmiddleware salió por else")
    return res.redirect("/busers/login")
    }
module.exports = authMiddle