const products = require('../mock/products');

exports.fetchProducts = (_req, res) => {
  return res.status(200).json(products);
};

exports.updateRating = (req, res) => {
  /*
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Change product rating (from 0 to 5)',
      schema: {
          $rating: 5,
      }
    } 
  */
  const { id } = req.params;
  const findedProduct = products.find(product => product.id === id);

  if (!findedProduct) {
    return res.status(404).json();
  }

  if (Number(req.body.rating) > 5 || Number(req.body.rating) < 0 || !req.body.rating || !Number.isInteger(req.body.rating)) {
    return res.status(400).json();
  }

  const test = { ... findedProduct };
  test.rating = req.body.rating;

  // findedProduct.rating = req.body.rating;

  return res.status(200).json(test);  
};
