const express = require('express')
const router = express.Router()

// La rutas de peticiones 
const deletBebida =require('../controllers/apis/deletBebida')
const deleteMezcla =require('../controllers/apis/deleteMezcla')
const getProductBebidas =require('../controllers/apis/getProductBebidas')
const getProductMezclas =require('../controllers/apis/getProductMezclas')

//  Obtener todos los productos de bebidas y mezclas 
router.get('/bebidas',getProductBebidas) 
router.get('/mezclas',getProductMezclas) 

 // deletes 
router.delete('/bebidas/:id',deletBebida) 
router.delete('/mezclas/:id',deleteMezcla) 

module.exports = router;