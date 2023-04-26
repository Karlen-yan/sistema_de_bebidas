const modeloBebidas = require("../../model/modelBebidas");
// const conneccion = require('../../db/conexion.js')
const mostrar = async () => {
  const productos = await modeloBebidas.find();
  return productos;
};

const getProductos = async (req, res) => {
  res.end(JSON.stringify(await mostrar()));
};

module.exports = getProductos;
