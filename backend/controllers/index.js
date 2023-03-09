const producto = require('../routes/producto.js')
require('../model/conexion.js')

//  Obtener los productos 
getProducto = ((req, res, next) => {
    console.log(req)
    ModeloProducto.find({}, function (producto, err) {

        res.send(producto)

    })
    next()
})

getProductoMezcla = ((req, res, next) => {
    ModeloProductomezcla.find({}, function (mezcla, err) {

        res.send(mezcla)

    })
    next()
})


deleteProducto = ((req, res) => {
    console.log(req.params.id)
    ModeloProducto.findByIdAndDelete(req.params.id);
    res.send("Producto comprado")

})


module.exports = {
    producto,
    getProducto,
    getProductoMezcla,
    deleteProducto
}