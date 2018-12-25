const productController = (Product) => {
  // middleware
  const params = (req, res, next) => {
    Product.findById(req.params.productId, (err, product) => {
      if (err) {
        res.status(500).send(err);
      } else if (!product) {
        res.status(404).send('product not found');
      } else {
        req.product = product;
        next();
      }
    });
  };
  const post = (req, res) => {
    const product = new Product(req.body);
    product.save();
    res.status(201).send(product); // 201 = created
  };
  const get = (req, res) => {
    // filter 'ganre' data only
    // /api/Products?ganre=Science
    const query = {};
    if (req.query.ganre) {
      query.ganre = req.query.ganre;
    }
    Product.find(query, (err, products) => {
      if (err) {
        res.status(500).send(err); // error
      } else {
        // add hyperlink
        let returnProducts = [];
        products.forEach((element, index, array) => {
          const newProduct = element.toJSON();
          // newProduct.links = {};
          // newProduct.links.self = `http://${req.headers.host}/api/products/${newProduct.productId}`;
          returnProducts.push(newProduct);
        });

        res.status(200).json(returnProducts); // success
      }
    });
  };
  const getById = (req, res) => {
    if (req.product) {
      const newProduct = req.product.toJSON();
      // newProduct.links = {};
      // const link = `http://${req.headers.host}/api/products/?ganre=${newProduct.productId}`;
      // newProduct.links.FilterByGanre = link.replace(' ', '%20');
      res.status(200).json(newProduct);
    }
  };

  const putById = (req, res) => {
    if (req.product) {
      req.product.productName = req.body.productName;
      req.product.productCode = req.body.productCode;
      req.product.releaseDate = req.body.releaseDate;
      req.product.description = req.body.description;
      req.product.price = req.body.price;
      req.product.releaseDate = req.body.releaseDate;                  
      req.product.starRating = req.body.starRating;
      req.product.imageUrl = req.body.imageUrl;
      req.product.save((err) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(req.product);
        }
      });
    }
  };
  const patchById = (req, res) => {
    if (req.product) {
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      if (req.body.productId) {
        delete req.body._id;
      }
      req.product = Object.assign(req.product, req.body);
      req.product.save((err) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(req.product);
        }
      });
    }
  };
  const deleteById = (req, res) => {
    if (req.product) {
      req.product.delete((err) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(204).send('Removed');
        }
      });
    }
  };

  return {
    params,
    get,
    post,
    getById,
    putById, // replace full object
    patchById, // update only part of the object
    deleteById, // delete a product
  };
};

module.exports = productController;
