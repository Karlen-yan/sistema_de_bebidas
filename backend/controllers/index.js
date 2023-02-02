const producto = require('../routes/producto.js')
require('../model/conexion.js')

//  Obtener los productos 
getProducto = ((req,res,next)=>{
    ModeloProducto.find({},function(producto, err){

        res.send(producto)
      
    // collection.find({}).toArray((err, data) => {
    //     res.send(data);
        
})
 next()
})


module.exports = {producto,getProducto}

 