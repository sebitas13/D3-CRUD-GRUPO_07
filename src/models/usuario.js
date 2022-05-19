const mongoose = require("mongoose");

//Esquema o modelo de datos del usuario
const usuarioSchema = mongoose.Schema({
    nombre : {
        type: String,required:true
    },
    edad : {
        type: Number,required:true
    },
    correo : {
        type: String,required:true
    }
});


module.exports = mongoose.model('usuario',usuarioSchema);
