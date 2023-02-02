require('dotenv').config()
const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI;

mongoose.connect(URI,{
    useNewUrlParser: "true"
});

const connection = mongoose.connection

connection.on('connected',()=>{console.log('Conexion correcta ')})
connection.on('error',()=>{console.log('Error en la conexion MongoDB')})

module.exports = mongoose