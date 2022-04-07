function usuarioINVMid (req,res,next){
    if(usuarioLog !== undefined){
        next() 
    }
    else {res.render("login",{errors:[{msg:"Solo usuarios Autorizados"}]})}; 
   }
   
   module.exports = usuarioINVMid;

   /* falta actualizar ROUTER cuando pueda leer el body CON LOS DOS MIDDLEWARE */