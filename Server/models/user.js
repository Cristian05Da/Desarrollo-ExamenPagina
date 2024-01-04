const mongoose = require("mongoose");

// crear los atributos del usuario 

const UserSchema  = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type : String,
        unique : true,
    },
    password: String,
    role: String, //  admin - user
    active :  Boolean,

});

module.exports = mongoose.model("User",UserSchema);