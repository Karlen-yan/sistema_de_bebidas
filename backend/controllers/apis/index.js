// const producto = require('../../routes/producto.js')
//  const conneccion = require('../../db/conexion.js')
// // 
// //  Obtener los productos 
// // getProducto = ((req, res, next) => {
// //     console.log(req)
// //     ModeloProducto.find({}, function (producto, err) {

// //         res.send(producto)

// //     })
// //     next()
// // })

// // getProductoMezcla = ((req, res, next) => {
// //     ModeloProductomezcla.find({}, function (mezcla, err) {

// //         res.send(mezcla)

// //     })
// //     next()
// // })
// const mostrarMezcla = async ()=>{

//     const mezcla = await ModeloProductoMezcla.find();    
//     return mezcla;
// }

// const getProductoMezcla = async (req,res)=>{
//     res.end(JSON.stringify(await mostrarMezcla()));

// }


// // deleteProducto = ((req, res) => {
// //     console.log(req.params.id)
// //     ModeloProducto.findByIdAndDelete(req.params.id);
// //     res.send("Producto comprado")

// // })


// module.exports = {
//     producto,
//     getProductos,
//     getProductoMezcla,
//     deleteProducto
// }