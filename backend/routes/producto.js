const express = require('express')
const userController =require('../controllers/index.js')
const router = express.Router()

const  mongoose  = require('mongoose')

const eschema = mongoose.Schema

const productoSchema = new eschema({
    _id: String,
    nombre: String,
    descripcion: String,
    precio:  Number
}) 
const productoSchemaMezcla = new eschema({
    _id: String,
    nombre: String,
    precio:  Number,
    descripcion: String
}) 


const ModeloProducto = mongoose.model('productos',productoSchema)
const ModeloProductomezcla = mongoose.model('mezclas',productoSchemaMezcla)


const mostrar = async ()=>{
    
    const productos = await ModeloProducto.find();

    console.log(productos);
    return productos;
}

//  Obtener todos los productos 
router.get('/obtenerproductos',userController.getProducto) 

const getProductos = async (req,res)=>{
    res.end(JSON.stringify(await mostrar()));   
}

const mostrarMezcla = async ()=>{
    
    const mezcla = await ModeloProductomezcla.find();
    console.log(mezcla);
    return mezcla;
}

//  Obtener todos los productos 
router.get('/obtenerproductos',userController.getProductoMezcla) 

const getProductoMezcla = async (req,res)=>{
    res.end(JSON.stringify(await mostrar(mostrarMezcla)));   
}

module.exports = {getProductos,getProductoMezcla}