const express = require('express');
const router = express.Router();
const products = require('./mock/products');

router.get('/products', (req, res) => {
  return res.status(200).json(products);
});

router.patch('/products/:id/rating', (req, res) => {
  /*    #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Change product rating (from 1 to 5)',
          schema: {
              $rating: 5,
          }
        } 
  */
  const { id } = req.params;

  try {
    const findedProduct = products.find(product => product.id === id);

    findedProduct.rating = req.body.rating;
  
    return res.status(200).json(products);  
  } catch (error) {
    return res.status(500).json();
  }
  
});

module.exports = router;
