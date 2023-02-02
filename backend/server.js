require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
//importar conexión mongoDB
const archivoBD = require('./model/conexion')
// Importaion del archivo de rutas y modulos usuario
const rutaProducto = require('./routes/producto')

//importamos bady parcser
// const bodyParser =require('body-parser')
// app.use(bodyParser.json)
// app.use(bodyParser.urlencoded({extended:'true'}))

app.use(cors())
app.use('/productos',rutaProducto.getProductos)
app.get('/',(req,res)=>{


    res.end('Bienvenidos al servidor backend Node.js. Corriendo.')
})

// COnfigurar server básico
const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`El servidor está corriendo correctamente. en el puerto ${PORT}`)
})

