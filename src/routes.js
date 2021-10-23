const express = require('express');
const router = express.Router();
const products = require('./mock/products');

router.get('/products', (_req, res) => {
  return res.status(200).json(products);
});

router.patch('/products/:id/rating', (req, res) => {
  /*    #swagger.parameters['obj'] = {
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

  if (Number(req.body.rating) > 5) {
    return res.status(500).json();
  }

  findedProduct.rating = req.body.rating;

  return res.status(200).json(findedProduct);  
});

module.exports = router;
