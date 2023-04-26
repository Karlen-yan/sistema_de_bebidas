require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

// Importaion del archivo de rutas y modulos usuario
const routes = require('./routes/producto')



app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use('/',routes)

app.get('/',(req,res)=>{
    res.end('Bienvenidos al servidor backend Node.js. Corriendo.')
})

// COnfigurar server básico
const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`El servidor está corriendo correctamente. en el puerto ${PORT}`)
})