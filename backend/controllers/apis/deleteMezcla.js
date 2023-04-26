const modeloMezclas = require("../../model/modelMezclas");

deleteProducto = (req, res, next) => {
  const id = req.params.id;

  modeloMezclas
    .findById(id)
    .then(producto => {
      if (!producto) {
        return res.status(404).send("Producto no encontrado");
      }

      modeloMezclas
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
