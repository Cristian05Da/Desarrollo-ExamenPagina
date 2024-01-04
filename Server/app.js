const express = require("express");
// Importar Body parser 
const bodyParser = require("body-parser");
const cors = require("cors");
const {API_VERSION} =  require("./constants");

const app = express();



// inport routings
const authRoutes = require("./router/auth");
const userRoutes =  require("./router/user");


//configure Body Parse
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Configure Static folder 
app.use(express.static("uploads"));


// Configure Header HTTP - CORS
app.use(cors());



//Configure routingd
app.use(`/api/${API_VERSION}`,authRoutes);
app.use(`/api/${API_VERSION}`,userRoutes);

module.exports = app;