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


const ModeloProducto = mongoose.model('productos',productoSchema)


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

module.exports = {getProductos}