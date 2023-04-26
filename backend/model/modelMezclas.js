// const mongoose = require('mongoose');
const coneccion = require('../db/conexion')

const productoSchemaMezcla = new coneccion.Schema({
    _id: coneccion.Schema.Types.ObjectId,
    nombre: String,
    descripcion: String,
    precio:  Number
}) 

const ModeloMezcla = coneccion.model('mezclas',productoSchemaMezcla)


module.exports =  ModeloMezcla