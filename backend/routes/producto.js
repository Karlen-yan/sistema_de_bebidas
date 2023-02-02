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
    // proba1
    const productos = await ModeloProducto.find();
    console.log(productos);
    return productos;
}

//  Obtener todos los productos 
// router.get('/obtenerproductos',userController.getProducto) 

const getProductos = async (req,res)=>{
    res.end(JSON.stringify(await mostrar()));
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Origin");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
       
}

module.exports = {getProductos}