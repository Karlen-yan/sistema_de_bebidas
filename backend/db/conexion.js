const mongoose = require('mongoose')
require('dotenv').config()

const URL = process.env.MONGODB_URI;

mongoose.connect(URL,{

    useNewUrlParser: true,
    useUnifiedTopology: true

});

const connection = mongoose.connection

connection.on('connected',()=>{console.log('Conexion correcta ')})
connection.on('error',()=>{console.log('Error en la conexion MongoDB')})

module.exports = mongoose