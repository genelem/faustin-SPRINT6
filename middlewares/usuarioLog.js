function usuarioLogMid (req,res,next){
 if(usuarioLog == undefined){
     next() 
 }
 else {res.render("login",{errors:[{msg:"Debe registrarse para poder Comprar"}]})}; 
}

module.exports = usuarioLogMid;

 /* falta actualizar ROUTER cuando pueda leer el body CON LOS DOS MIDDLEWARE */