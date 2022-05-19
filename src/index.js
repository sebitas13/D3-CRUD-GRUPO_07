const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const rutasUsuario = require('./routes/usuario');

const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json()); //el obj body de json js
app.use('/api',rutasUsuario);


//routes

app.get('/',(req,res) => {
    res.send('Welcome');
});


//coneccion bd

mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log('Conectado a MongoAtlas'))
.catch((err)=> console.error(err));



app.listen(port,() => console.log('servidor en:',port));