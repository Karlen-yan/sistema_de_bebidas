const modeloBebidas = require("../../model/modelBebidas");

deleteProducto = (req, res, next) => {
  const id = req.params.id;

  modeloBebidas
    .findById(id)
    .then(producto => {
      if (!producto) {
        return res.status(404).send("Producto no encontrado");
      }

      modeloBebidas
        .findByIdAndDelete(id)
        .then(() => {
          res.send("Producto eliminado");
          next();
        })
        .catch(err => {
          console.log(err);
          res.status(500).send("Error al eliminar el producto");
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Error al buscar el producto");
    });
};

module.exports = deleteProducto;
