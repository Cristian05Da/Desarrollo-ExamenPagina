const user = require("../models/user");
const User =  require("../models/user");

const bcrypt = require("bcryptjs")

async  function getMe(req, res){
    const { user_id }= req.user;

    const response =  await User.findById(user_id);

    if (!response){
        res.status(400).send({msg : "No se ha econtrado usuario"})
    } else {
        res.status(200).send(response);
    }   
}

// obtener todos los usuario activos o inactivos 
async function getUsers(req,res){
    const { active } = req.query;
    let response = null;
    if (active === undefined){
        response = await User.find();
    }  else {
        response =  await User.find({active});
    }

    res.status(200).send(response);
   
}

// crear usuario

async function createUser(req, res) {
    try {
        const { password, ...userData } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = new User({ ...userData, password: hashedPassword, active: false });
        
        const userStored = await user.save();

        res.status(201).send(userStored);
    } catch (error) {
        console.error(error);
        res.status(400).send({ msg: "Error al crear usuario" });
    }
}

// actualizar usuario

async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const userData = req.body;

        // encriptar la contraseña al actulizar

        if(userData.password){
            const salt = bcrypt.genSaltSync(10);
            const hashdPassword =bcrypt.hashSync(userData.password, salt);
            userData.password =hashdPassword;
        }else{
            delete userData.password;
        }

        const updatedUser = await User.findByIdAndUpdate({ _id: id }, userData);
        
        if (!updatedUser) {
            res.status(404).send({ msg: "Usuario no encontrado" });
        } else {
            res.status(200).send({ msg: "Actualización correcta" });
        }
    } catch (error) {
        console.error(error);
        res.status(400).send({ msg: "Error al actualizar el usuario" });
    }
}

// eliminar el usuario
async function deleteUser(req, res) {
    try {
        const { id } = req.params;

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            res.status(404).send({ msg: "Usuario no encontrado" });
        } else {
            res.status(200).send({ msg: "Usuario eliminado", user: deletedUser });
        }
    } catch (error) {
        console.error(error);
        res.status(400).send({ msg: "Error al eliminar el usuario" });
    }
}


module.exports = {
    getMe,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
}