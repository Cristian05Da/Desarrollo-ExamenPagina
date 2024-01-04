const express = require("express");

const AuthController = require("..//controllers/auth");

// crear las rutas

const api = express.Router();

// tipo de peticion = post 

api.post("/auth/register",AuthController.register);
api.post("/auth/login", AuthController.login);
api.post("/auth/refresh_access_token",AuthController.refreshAccessToken);
module.exports  = api ;

