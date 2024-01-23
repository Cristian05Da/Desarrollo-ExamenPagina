// importamos express
const express = require("express");
// importar contralodor
const UserController =  require("..//controllers/user");
// importar controlado middlewares
const md_auth =  require("../middlewares/authenticated");
// 
const multiparty = require("connect-multiparty");

const md_upload = multiparty({uploadDir: "./uploads/avatar"});



const api = express.Router();
// se puede tener varios middlewares por eso va en array
api.get("/user/me",[md_auth.asureAuth], UserController.getMe);
api.get("/users",[md_auth.asureAuth],UserController.getUsers);
api.post("/user",[md_auth.asureAuth,md_upload],UserController.createUser);
// se usa patch para que solo se actulice los datos que deseamos 
api.patch("/user/:id",[md_auth.asureAuth,md_upload],UserController.updateUser);
api.delete("/user/:id",[md_auth.asureAuth],UserController.deleteUser);
module.exports = api;