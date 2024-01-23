const jwt  = require("../utils/jwt");

//next = puede continuar con la funcion siguiente 
function asureAuth (req,res,next){
    if(!req.headers.authorization){
        return res.status(403).send({msg: "la peticion no tiene la cabezera de authenticacion "})
    }

    const token = req.headers.authorization.replace("Bearer ", "");

    try {
        const payload =jwt.decoded(token);
        // obtener la fecha de expiracion
        const {exp}= payload;
        // obtener la fecha actual
        const currentData = new Date().getTime();

        if (exp <= currentData){
            return res.status(400).send({msg: "El token ha expirado"});
        }

        req.user = payload;
        next();

    } catch (error) {
        return res.status(400).send({msq:"token invalido"});
        
    }


}

module.exports = {
    asureAuth,
}