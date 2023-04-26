// const mongoose = require('mongoose');
const coneccion = require('../db/conexion')

const productoSchema = new coneccion.Schema({
    _id: coneccion.Schema.Types.ObjectId,
    nombre: String,
    descripcion: String,
    precio:  Number
}) 


const ModeloBebidas = coneccion.model('productos',productoSchema)


module.exports = ModeloBebidas; 