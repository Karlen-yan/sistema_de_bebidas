const producto = require('../routes/producto.js')
require('../model/conexion.js')

//  Obtener los productos 
getProducto = ((req,res,next)=>{
    ModeloProducto.find({},function(producto, err){

        res.send(producto)
        
})
 next()
})

getProductoMezcla = ((req,res,next)=>{
    ModeloProductomezcla.find({},function(mezcla, err){

        res.send(mezcla)
      
})
 next()
})


module.exports = {producto,getProducto,getProductoMezcla}

 