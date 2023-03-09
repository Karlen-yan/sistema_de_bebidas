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
const ModeloProductoMezcla = mongoose.model('mezclas',productoSchemaMezcla)


const mostrar = async ()=>{

    const productos = await ModeloProducto.find();
    return productos;
}

//  Obtener todos los productos 
router.get('/obtenerproductos',userController.getProducto) 

const getProductos = async (req,res)=>{
    res.end(JSON.stringify(await mostrar()));   
}



const mostrarMezcla = async ()=>{

    const mezcla = await ModeloProductoMezcla.find();    
    return mezcla;
}

//  Obtener todos los productos 
router.get('/obtenerproductos2',userController.getProductoMezcla) 



const getProductoMezcla = async (req,res)=>{
    res.end(JSON.stringify(await mostrarMezcla()));

}


// router.delete('products/:id',(req, res)=>{
//     const id = req.params.id;
//     ModeloProducto.findByIdAndDelete(id,(err, product)=>{
//         if(err) throw err;
//         res.send(`Producto ${product.name} se eliminó.`);
//     });
// });
// old

router.delete('/products/:id',userController.deleteProducto) 

const eliminarProducto = async () => {
    ModeloProducto.findByIdAndDelete(req.params.id);
}

// // Eliminar un producto por id
const deleteProducto =  async (req, res) => {
    res.end(JSON.stringify(await eliminarProducto()));
};
  
//   // Eliminar una mezcla por id
//   router.delete('/mezclas/:id', async (req, res) => {
//     try {
//       const mezcla = await ModeloProductoMezcla.findByIdAndDelete(req.params.id);
//       if (!mezcla) {
//         return res.status(404).send();
//       }
//       res.send(mezcla);
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   });
  

module.exports = {getProductos,getProductoMezcla,deleteProducto}