const jwt  = require("jsonwebtoken");


function asureAuth (req,res,next){
    console.log("Hola Estoy Aqui");
    next();
}

module.exports = {
    asureAuth,
}