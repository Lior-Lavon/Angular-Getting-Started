const express = require('express');
const productCtrl = require('./controller');

const router = (Product) => {
  const productController = productCtrl(Product);

  const productRouter = express.Router();
  productRouter.route('/')
    .post(productController.post)
    .get(productController.get);

  productRouter.use('/:productId', productController.params);
  productRouter.route('/:productId')
    .get(productController.getById)
    .put(productController.putById) // replace new product with existing
    .patch(productController.patchById) // update attributes
    .delete(productController.deleteById);

  return productRouter;
};

module.exports = router;
