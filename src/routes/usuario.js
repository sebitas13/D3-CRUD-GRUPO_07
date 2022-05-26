
const express = require('express'); //instancia de express
const usuarioSchema = require('../models/usuario'); //modelo datos usuarios

const router = express.Router();


//Crear ruta para crear usuario

router.post('/usuarios', (req,res)=> {
    const usuario = usuarioSchema(req.body); //creamos al usuario
    usuario.save()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error}));
    //res.send('ruta de usuario creado');
});


//Obtener usuarios

router.get('/usuarios', (req,res)=> {
    usuarioSchema
    .find() 
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error}));
    //res.send('ruta de usuario creado');
});























//Obtener un usuario

router.get('/usuarios/:id', (req,res)=> {
    const {id} = req.params;
    usuarioSchema
    .findById(id) 
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error}));
    //res.send('ruta de usuario creado');
});


//Actualizar usuario

router.put('/usuarios/:id', (req,res)=> {
    const {id} = req.params;
    const {nombre,edad,correo} = req.body;
    usuarioSchema
    .updateOne({_id:id},{$set:{nombre,edad,correo}}) 
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error}));
    //res.send('ruta de usuario creado');
});

//Eliminar usuario

router.delete('/usuarios/:id', (req,res)=> {
    const {id} = req.params;
    usuarioSchema
    .remove({_id:id}) 
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error}));
    //res.send('ruta de usuario creado');
});


module.exports = router;

